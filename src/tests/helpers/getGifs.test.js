import { getGifts } from "../../helpers/getGifts"


describe("Prueba de getGifs Fetch",  () => {
    test('should get 10 elements', async () => { 
        const ReturnValue = "lmao";
      const gifs = await getGifts(ReturnValue);

      expect(gifs.length).toBe(10);
     })

})