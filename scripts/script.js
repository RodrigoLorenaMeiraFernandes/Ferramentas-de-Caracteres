// Inverter Mensagem
function inverteMensagem() {
  var mensagemOriginal1 = document.getElementById('exercicio1').value;
  var caracteres = mensagemOriginal1.split(" ");
  var caracteresInvertidos = caracteres.reverse();
  var mensagemInvertida = caracteresInvertidos.join(" ");
  
  document.getElementById('resposta1').textContent = mensagemInvertida;
}

// Remover Duplicatas
function removerDuplicatas(string) {
  var caracteresUnicos = '';
  for (var i = 0; i < string.length; i++) {
    var caractere = string.charAt(i);
    if (caracteresUnicos.indexOf(caractere) === -1) {
      caracteresUnicos += caractere;
    }
  }
  return caracteresUnicos;
}

function exibirMensagemSemDuplicatas() {
  var mensagemOriginal2 = document.getElementById('exercicio2').value;
  var mensagemSemDuplicatas = removerDuplicatas(mensagemOriginal2);
  document.getElementById('resposta2').innerHTML = mensagemSemDuplicatas;
}

// Encontre a substring palindroma mais longa na string abaixo:
function encontrarMaiorSubstringPalindroma() {
  var string = document.getElementById('exercicio3').value;
  var maiorSubstring = '';
  
  function ehPalindroma(substring) {
    var reversedSubstring = substring.split('').reverse().join('');
    return substring === reversedSubstring;
  }
  
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j <= string.length; j++) {
      var substring = string.slice(i, j);
      if (ehPalindroma(substring) && substring.length > maiorSubstring.length) {
        maiorSubstring = substring;
      }
    }
  }
  
  document.getElementById('resposta3').innerHTML = "A maior substring palindrômica de '" + string + "' é: " + maiorSubstring;
}

// Coloque em maiúscula a primeira letra de cada palavra na string
function convertMasc() {
  var textoOriginal = document.getElementById('exercicio4').value;
  var palavras = textoOriginal.split(" ");
  var palavrasCapitalizadas = [];

  for (var i = 0; i < palavras.length; i++) {
    var palavra = palavras[i];
    var primeiraLetra = palavra.charAt(0).toUpperCase();
    var restanteDaPalavra = palavra.slice(1).toLowerCase();
    var palavraCapitalizada = primeiraLetra + restanteDaPalavra;
    palavrasCapitalizadas.push(palavraCapitalizada);
  }

  var textoCapitalizado = palavrasCapitalizadas.join(" ");
  console.log(textoCapitalizado);
  document.getElementById('resposta4').innerHTML = textoCapitalizado;
}

// Verifique se a string é um anagama de um palindromo
function anagramaPalindromo() {
  var string = document.getElementById('exercicio5').value;
  if (!string) {
    return;
  }

  var caracteresCount = {};
  for (var i = 0; i < string.length; i++) {
    var caractere = string[i];
    if (caracteresCount[caractere]) {
      caracteresCount[caractere]++;
    } else {
      caracteresCount[caractere] = 1;
    }
  }

  var oddCount = 0;
  for (var countar of Object.values(caracteresCount)) {
    if (countar % 2 !== 0) {
      oddCount++;
    }
  }

  var respostaElement = document.getElementById('resposta5');
  if (oddCount <= 1) {
    respostaElement.innerHTML = `A string '${string}' é um anagrama de um palíndromo.`;
  } else {
    respostaElement.innerHTML = `A string '${string}' não é um anagrama de um palíndromo.`;
  }
}









