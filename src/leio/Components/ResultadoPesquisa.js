// Importações gerais
import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import stylePesquisa from "../assets/styles/resultadoPesquisa";

const ResultadoPesquisa = () => {
  const navigation = useNavigation(); // hook de navegação

  const [pesquisa, setPesquisa] = useState("");

  return (
    <View style={stylePesquisa.container}>
      <View style={stylePesquisa.inputContainer}>
        <TextInput
          placeholder="O que você quer ler?"
          value={pesquisa}
          onChangeText={(text) => setPesquisa(text)}
        />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => console.log("Research One")}
            style={{ marginRight: 10 }}
          >
            <Image source={require("../assets/img/search.svg")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Research Two")}>
            <Image source={require("../assets/img/filter.svg")} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/img/bookOne.svg")}
          style={{ width: 100, height: 150 }}
        />
        <View style={{ marginLeft: 10, marginTop: -20, marginBottom:-30 }}>
          <Text>Amor & gelato</Text>
          <Text>Jenna Evans Welch</Text>

          <View style={{ flexDirection: "row", marginTop: 45 }}>
            {[1, 2, 3, 4, 5].map((index) => (
              <TouchableOpacity
                key={index}
                onPress={() => console.log(`Pressed star ${index}`)}
              >
                <Image
                  source={require("../assets/img/star.svg")}
                  style={{ width: 10, height: 15, marginRight: 5 }}
                />
              </TouchableOpacity>
            ))}
          </View>
          

          <View style={{ flexDirection: "row", marginTop: 25 }}>
            {/* Botões */}
            <TouchableOpacity onPress={() => console.log("Info")}>
              <Image
                source={require("../assets/img/info.svg")}
                style={{ width: 10, height: 15, marginRight: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Download")}>
              <Image
                source={require("../assets/img/download.svg")}
                style={{ width: 10, height: 15, marginRight: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Favorite")}>
              <Image
                source={require("../assets/img/favorite.svg")}
                style={{ width: 10, height: 15 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>


      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/img/bookTwo.svg")}
          style={{ width: 100, height: 150 }}
        />
        <View style={{ marginLeft: 10, marginTop: -20, marginBottom:-30 }}>
          <Text>Amor & gelato</Text>
          <Text>Jenna Evans Welch</Text>

          <View style={{ flexDirection: "row", marginTop: 45 }}>
            {[1, 2, 3, 4, 5].map((index) => (
              <TouchableOpacity
                key={index}
                onPress={() => console.log(`Pressed star ${index}`)}
              >
                <Image
                  source={require("../assets/img/star.svg")}
                  style={{ width: 10, height: 15, marginRight: 5 }}
                />
              </TouchableOpacity>
            ))}
          </View>
          

          <View style={{ flexDirection: "row", marginTop: 25 }}>
            {/* Botões */}
            <TouchableOpacity onPress={() => console.log("Info")}>
              <Image
                source={require("../assets/img/info.svg")}
                style={{ width: 10, height: 15, marginRight: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Download")}>
              <Image
                source={require("../assets/img/download.svg")}
                style={{ width: 10, height: 15, marginRight: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Favorite")}>
              <Image
                source={require("../assets/img/favorite.svg")}
                style={{ width: 10, height: 15 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ResultadoPesquisa;

//LÓGICA DA API


// const ResultadoPesquisa = () => {
//   const navigation = useNavigation(); // hook de navegação

//   const [pesquisa, setPesquisa] = useState("");
//   const [livros, setLivros] = useState([]);

//   useEffect(() => {
//     // Função para buscar os dados da API
//     const fetchLivros = async () => {
//       try {
//         // Fazer a requisição para a API
//         const response = await fetch("URL_DA_API_AQUI");
//         const data = await response.json();
//         setLivros(data); // Atualizar o estado com os dados recebidos
//       } catch (error) {
//         console.error("Erro ao buscar livros:", error);
//       }
//     };

//     fetchLivros();
//   }, []);

//   return (
//     <View style={stylePesquisa.container}>
//       <View style={stylePesquisa.inputContainer}>
//         <TextInput
//           placeholder="O que você quer ler?"
//           value={pesquisa}
//           onChangeText={(text) => setPesquisa(text)}
//         />
//         <View style={{ flexDirection: "row" }}>
//           <TouchableOpacity
//             onPress={() => console.log("Research One")}
//             style={{ marginRight: 10 }}
//           >
//             <Image source={require("../assets/img/research.svg")} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => console.log("Research Two")}>
//             <Image source={require("../assets/img/researchTwo.svg")} />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {livros.map((livro, index) => (
//         <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
//           <Image
//             source={{ uri: livro.imagem }}
//             style={{ width: 100, height: 150 }}
//           />
//           <View style={{ marginLeft: 10, marginTop: -20, marginBottom: -30 }}>
//             <Text>{livro.titulo}</Text>
//             <Text>{livro.autor}</Text>

//             <View style={{ flexDirection: "row", marginTop: 45 }}>
//               {[1, 2, 3, 4, 5].map((index) => (
//                 <TouchableOpacity
//                   key={index}
//                   onPress={() => console.log(`Pressed star ${index}`)}
//                 >
//                   <Image
//                     source={require("../assets/img/stars.svg")}
//                     style={{ width: 10, height: 15, marginRight: 5 }}
//                   />
//                 </TouchableOpacity>
//               ))}
//             </View>

//             <View style={{ flexDirection: "row", marginTop: 25 }}>
//               {/* Botões */}
//               <TouchableOpacity onPress={() => console.log("Info")}>
//                 <Image
//                   source={require("../assets/img/info.svg")}
//                   style={{ width: 10, height: 15, marginRight: 20 }}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => console.log("Download")}>
//                 <Image
//                   source={require("../assets/img/download.svg")}
//                   style={{ width: 10, height: 15, marginRight: 20 }}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => console.log("Favorite")}>
//                 <Image
//                   source={require("../assets/img/favorite.svg")}
//                   style={{ width: 10, height: 15 }}
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default ResultadoPesquisa;
