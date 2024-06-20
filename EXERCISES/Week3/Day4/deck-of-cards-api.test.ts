import axios from "axios";

jest.mock("axios");

import { shuffleDeck, drawCards, remainingCards } from "./deck-of-cards-api";

// We need to tell our unit tests that 'axios.get' has been mocked
// This tells typescript that we have extra mocking functions available on the mock
const mockedGet = axios.get as jest.Mock;

describe("when using the deck of cards API", () => {
  describe("when using shuffleDeck", () => {
    test("it will return a new deck ID", async () => {
      // Arrange
      const myServer = "www.myserver.com/";
      // See https://deckofcardsapi.com/#shuffle "Shuffle the Cards" section
      const dummyApiResponse = {
        success: true,
        deck_id: "3p40paa87x90",
        shuffled: true,
        remaining: 52,
      };
      const dummyAxiosResponse = {
        data: dummyApiResponse,
      };
      mockedGet.mockResolvedValue(dummyAxiosResponse);

      // Act + Assert
      expect(await shuffleDeck(myServer)).toEqual("3p40paa87x90");

      // This could be in a separate test
      expect(mockedGet.mock.calls[0][0]).toEqual(
        `${myServer}deck/new/shuffle/?deck_count=1`
      );
    });
  });

  describe("when using drawCards", () => {
    test("Test for Draw Cards", async () => {
      // todo write a test for "drawCards"
      // See https://deckofcardsapi.com/#draw-card "Draw a Card" section
      const myServer =
        "https://deckofcardsapi.com/api/deck/kxozasf3edqu/draw/?count=2";
      const dummyApiResponse = {
        success: true,
        deck_id: "kxozasf3edqu",
        cards: [
          {
            code: "6H",
            image: "https://deckofcardsapi.com/static/img/6H.png",
            images: {
              svg: "https://deckofcardsapi.com/static/img/6H.svg",
              png: "https://deckofcardsapi.com/static/img/6H.png",
            },
            value: "6",
            suit: "HEARTS",
          },
          {
            code: "5S",
            image: "https://deckofcardsapi.com/static/img/5S.png",
            images: {
              svg: "https://deckofcardsapi.com/static/img/5S.svg",
              png: "https://deckofcardsapi.com/static/img/5S.png",
            },
            value: "5",
            suit: "SPADES",
          },
        ],
        remaining: 50,
      };
      //as every  axios response comes as a collection of various objects we need to access data object of axios
      const dummyAxiosResponse = {
        data: dummyApiResponse,
      };
      mockedGet.mockResolvedValue(dummyAxiosResponse);
      expect(await shuffleDeck(myServer)).toEqual("kxozasf3edqu");
    });
  });

  describe("when using remainingCards", () => {
    test("Test for Re-shuffle Cards", async () => {
      // todo write a test for "remainingCards"
      // See https://deckofcardsapi.com/#reshuffle "Reshuffle the Cards" section
      const myServer =
        "https://deckofcardsapi.com/api/deck/kxozasf3edqu/shuffle/";
      const dummyApiResponse = {
        success: true,
        deck_id: "kxozasf3edqu",
        remaining: 52,
        shuffled: true,
      };
      const dummyAxiosResponse = {
        data: dummyApiResponse,
      };
      mockedGet.mockResolvedValue(dummyAxiosResponse);
      expect(await shuffleDeck(myServer)).toEqual("kxozasf3edqu");
    });
  });
});
