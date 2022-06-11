package com.rhysticbuddy.card_db.card;


import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/card")
@CrossOrigin("*")
public class CardController {
    private final CardService cardService;



    public CardController(CardService cardService){
        this.cardService = cardService;
    }
    @GetMapping()
    public List<Card> getCards(){
        return cardService.getCards();
    }

    @GetMapping("/name")
    public List<Card> getCardsByName(@RequestParam String name){return cardService.getCardsByName(name);}
    @GetMapping("/nameContains")
    public List<Card> getCardsByNameIsContaining(@RequestParam String name){return cardService.getCardsByNameIsContaining(name);}
//    @GetMapping
//    public List<Card> getCardsByTypes(List<String> types){}
//    @GetMapping
//    public List<Card> getCardsByKeywords(List<String> keywords){}
//    @GetMapping("/text")
//    public List<Card> getCardsByText(@RequestParam String text){return cardService.getCardsByText(text)}
////    @GetMapping
//    public List<Card> smartSearch(String query){}

}
