def stop_docker(){
    echo "Stop_docker"
	sh "docker stop sights"
	sh "docker rm sights"
    path = sh(returnStdout:  true, script: "pwd").trim()
    echo "$path and ${env.WORKSPACE}"
    if (path == env.WORKSPACE){
	cp target/karate-reports/karate-summary.html ~/report
        sh "rm -rf *"
    }
}

pipeline {
    agent any
    
	environment {
	    jenkins_port = "8080"
	    docker_port = "8081"
        docker_name = "sights"
		api_rep = "git@github.com:sax0224/KeelungSights.git"
// 		api_rep = "git@github.com:sax0224/tag1.git"
// 		api_rep = "git@github.com:sax0224/tag2.git"
		test_case_rep = "git@github.com:sax0224/sights_test.git"
// 		test_case_rep = "git@github.com:sax0224/tag1.git"
// 		test_case_rep = "git@github.com:sax0224/tag2.git"
        mail = "sax0224@gmail.com"
        jobName = 'currentBuild.fullDisplayName   ' 

	}
	
    stages {
        stage('Unit test') {
            steps {
                script {
                    dir('api') {
                        try {
                            git branch: 'main', credentialsId: 'github', url: env.api_rep
                            sh "mvn clean"
                            sh "mvn test"
                        }
                        catch (exc) {
                            error "Unit test fail."
                        }
                    }
                }
            }
        }        
        stage('Check version') {
            steps {
                script {
                    dir('api') {
                        try {
                            dev_ver = sh(returnStdout:  true, script: "git tag --sort=-creatordate | head -n 1")
                            dev_ver = dev_ver.trim()
                            echo "dev_ver: ${dev_ver}"
                        }
                        catch (exc) {
                            error "Develop API repository is not exist !!!"
                        }
                    }
                    dir('test_case') {
                        try {
                            git branch: 'main', credentialsId: 'github', url: env.test_case_rep
                            test_ver = sh(returnStdout:  true, script: "git tag --sort=-creatordate | head -n 1")
                            test_ver = test_ver.trim()
                            echo "test_ver: ${test_ver}"
                        }
                        catch (exc) {
                            error "Test case repository is not exist !!!"
                        }
                    }
                    if (dev_ver != test_ver){
                        last_dev_ver = ""
                        def(major, minor, patch) = dev_ver.split("\\.")
                        patch = Integer.parseInt(patch)
                        if (patch == 0){
                            error "Cann't find the old verion of test case."
                        } else {
                            for (i=patch-1; i>=0; i--){
                                last_dev_ver = "${major}.${minor}.${i}"
                                echo "last_dev_ver: ${last_dev_ver}\n"
                                if (last_dev_ver == test_ver){
                                    echo "the same"
                                    break
                                }
                            }
                        }
                    }
                }
            }
        }
        stage('Run API') {
            steps {
                script {
                    dir('api') {
                        try {
                            sh "mvn -Dmaven.test.failure.ignore=false clean package"
                            sh "docker run -d -p ${docker_port}:${docker_port} --name ${docker_name} ${docker_name}"
                        }
                        catch (exc) {
                            stop_docker()
                            error "Run docker fail."
                        }
                    }
                }
            }
        }
        stage('Check API is running') {
            steps {
                script {
            	    url = env.JENKINS_URL
            	    echo "url: ${url}"
            	    api_url = url.replace(":${jenkins_port}",":${docker_port}")
            	    echo "api_url: ${api_url}"              
                    for (i=0; i<3; i++){
                        try {
                            // status = sh(returnStdout:  true, script: "curl -I -o /dev/null -s -w %{http_code} ${env.JENKINS_URL}")
                            status = sh(returnStdout:  true, script: "curl -I -o /dev/null -s -w %{http_code} ${api_url}")
                            echo status
                            if (status == "200"){
                                break
                            }
                        }
                        catch (exc) {
                            echo "Retry ${i+1}"
                            echo "Please waitting for run API"
                            sleep 20
                        }
                        if (i == 2){
                            stop_docker()
                            error "Running api docker fail"
                        }
                    }
                }
            }
        }        
        stage('Run test case') {
            steps {
                script {
                    dir('test_case') {
                        try {
                            sh "git checkout ${last_dev_ver}"
                            sh "mvn -Dmaven.test.failure.ignore=false clean package"
                        }
                        catch (exc) {
                            stop_docker()
                            error "Running test case fail"
                        }
                    }
                    stop_docker()
                }
            }
        } 
    }
    post {
        always {
            emailext body: '''${SCRIPT, template="groovy-html.template"}''', 
            mimeType: 'text/html',
            subject: "[Jenkins] ${currentBuild.currentResult} Pipeline: ${env.JOB_NAME}", 
            to: "${mail}"
        }
    }
}
