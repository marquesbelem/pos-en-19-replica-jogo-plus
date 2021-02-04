import Piii from "piii";

const FilterWords = (words) => {
    const filtro = [
        "merd",
        [
          "a",
          "inha",
          "ao" 
        ],
        "cu",
        [
          "zao",
          "zinho"
        ],
        "put",
        [
          "a",
          "inha",
          "tao"
        ],
        "burr",
        [
          "o",
          "inho",
          "ao"
        ]
      ];
      
      const piii = new Piii({
        filters: [
            filtro
        ]
      });

    return piii.filter(words); 
}

export default FilterWords;