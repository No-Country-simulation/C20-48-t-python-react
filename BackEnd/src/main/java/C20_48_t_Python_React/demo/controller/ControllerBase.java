package C20_48_t_Python_React.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class ControllerBase {
    
        @GetMapping("/get")
        public String helloGet(){
            return "Hello World - GET";
        }

        @PostMapping("/post")
        public String helloPost(){
            return "Hello World - POST";
        }

        @PutMapping("/put")
        public String helloPut(){
            return "Hello World - PUT";
        }

        @DeleteMapping("/delete")
        public String helloDelete(){
            return "Hello World - DELETE";
        }

        @PatchMapping("/patch")
        public String helloPatch(){
            return "Hello World - PATCH";
        }
    }

