package category.presentation;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryController {

    @RequestMapping(value = "/categories")
    public String index() {
        return "[{id: 1, name: \"Entertainment\", iconUrl: \"/ent.png\"]";
    }

}
