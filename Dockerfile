FROM adoptopenjdk/openjdk11:latest
VOLUME /tmp
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar
ENV PORT 8081
EXPOSE $PORT
ENTRYPOINT ["java","-jar","/app.jar"]
