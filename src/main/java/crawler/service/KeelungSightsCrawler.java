package crawler.service;

import crawler.repository.Sight;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class KeelungSightsCrawler {
    public Sight[] getItems(String zoneName) throws IOException {
        try{
            String url = "https://www.travelking.com.tw/tourguide/taiwan/keelungcity";
            Document doc = Jsoup.connect(url).get();
            //            System.out.println(doc);
            int ulSize = doc.select(".box_ss > a").size();
            String preLink = "https://www.travelking.com.tw";
            Elements links = doc.select(".box_ss > a");
            Sight[] allZone = new Sight[] {};
            List<Sight> sights = new ArrayList<Sight>();
            for (Element link : links) {
                String sightLink = preLink + link.attr("href");
                //System.out.println(sightLink);
                Document allZoneLinks = Jsoup.connect(sightLink).get();
                Elements zoneLinks = allZoneLinks.select(".box > ul > li > a");
                //      System.out.println(zoneLinks);
                String zone = link.attr("title");
                //      System.out.println(zone);
                //      System.out.println(sight.getZone());
                for (Element zoneLink : zoneLinks) {
                    Sight sight = new Sight();
                    String zonesContent = preLink + zoneLink.attr("href");
                    //        System.out.println(zones);
                    Document zoneContent = Jsoup.connect(zonesContent).get();
                    sight.setSightName(zoneContent.select("#point_area > h1 > span").text());
                    sight.setZone(zone);
                    sight.setCategory(zoneContent.select(".point_type strong").text());
                    sight.setPhotoURL(zoneContent.select(".gpic > .lazyload").attr("data-src"));
                    sight.setDescription(zoneContent.select(".text").text());
                    sight.setAddressURL(zoneContent.select(".address > p > a").attr("href"));
                    sight.setAddress(zoneContent.select(".address > p > a > span").text());
                    sights.add(sight);
//                    System.out.println(sight.getSightName());
//                    System.out.println(sight.getZone());
//                    System.out.println(sight.getCategory());
//                    System.out.println(sight.getPhotoURL());
//                    System.out.println(sight.getDescription());
//                    System.out.println(sight.getAddress());
//                    System.out.println(sight.getAddressURL());
                }
            }
            return sights.toArray(allZone);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}

