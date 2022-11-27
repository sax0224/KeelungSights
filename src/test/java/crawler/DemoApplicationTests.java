package crawler;

import crawler.entity.KeelungSightsCrawler;
import crawler.service.CrawlerService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import java.io.IOException;

@SpringBootTest
class DemoApplicationTests {

	@Test
	void get_crawler() throws IOException {
		KeelungSightsCrawler crawlers = new KeelungSightsCrawler();
		Assertions.assertNotNull(crawlers.getItems(""));
	}

	@Test
	void get_all_sight_len() throws IOException {
		KeelungSightsCrawler crawlers = new KeelungSightsCrawler();
//		System.out.println((crawlers.getItems("")).length);
//		Assertions.assertEquals(40, crawlers.getItems("").length);
		Assertions.assertEquals(41, crawlers.getItems("").length);
	}

	@Test
	void get_single_zone_sight_len() throws IOException {
		CrawlerService single_zone = new CrawlerService();
//		System.out.println(single_zone.getCrawler("暖暖").size());
		Assertions.assertEquals(1, single_zone.getCrawler("暖暖").size());
	}
}
