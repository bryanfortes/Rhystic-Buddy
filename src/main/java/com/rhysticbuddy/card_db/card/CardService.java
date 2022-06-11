package com.rhysticbuddy.card_db.card;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class CardService {
    private final CardRepository cardRepository;

    public List<Card> getCards() {
        return cardRepository.findAll();
    }
    public List<Card> getCardsByName(String name){return cardRepository.findCardsByName(name);}
   //public List<Card> getCardsByText(String text){return cardRepository.findCardsByText(text);}

    public List<Card> getCardsByNameIsContaining(String name) {return cardRepository.findCardsByNameIsContaining(name);    }
}
