package crawler.service;
import crawler.entity.KeelungSightsCrawler;
import crawler.entity.Sight;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;

@Service
public class CrawlerService {
    KeelungSightsCrawler crawler = new KeelungSightsCrawler();
    Sight[] sights;
    {
        try {
            sights = crawler.getItems("");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public ArrayList<Sight> getCrawler(String zone) throws IOException {
        ArrayList<Sight> result = new ArrayList<>();
        for (Sight sight : sights){
            if(sight.getZone().equals(zone + "區")){
                result.add(sight);
//                System.out.printf("sight:%s\n",result);
            }else if (zone.equals(""))
                result.add(sight);
//            }else {
//                System.out.println("Else");
//            }
        }
        return result;
    }
}