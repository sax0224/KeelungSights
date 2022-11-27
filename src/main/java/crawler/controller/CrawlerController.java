package crawler.controller;

import crawler.entity.Sight;
import crawler.service.CrawlerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(path = "/SightAPI")
public class CrawlerController {
    private final CrawlerService crawlerService;

    @Autowired
    public CrawlerController(CrawlerService crawlerService) {
        this.crawlerService = crawlerService;
    }

    @GetMapping()
    public List<Sight> getCrawler(@RequestParam(value = "zone", defaultValue = "") String zone) throws IOException {
//        System.out.println(crawlerService.getCrawler(zone));
        return crawlerService.getCrawler(zone);
    }
}

