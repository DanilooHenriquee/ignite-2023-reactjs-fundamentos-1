# Dois grandes momentos para se criar components no REACT.

1 - Quando algo se repete muito, com o mesmo visual, comportamento, funcionamento.
2 - Quando se consegue pegar um Componente grande, e desacoplar parte da lógica principal para um novo component
para que essa lógica desse component menor, fique separado e mais facil de dar manutenção.

================================================================================

# Pegar elementos do html, duas formas de fazer:

## Programação imperativa

- Dizer passo-a-passo o que o código deve fazer.
Ex: Receita de bolo:

1. Pegar os ingredientes e por em um pote.
2. mexer os ingredientes ate que estejam misturados.
3. colocar os ingredientes em uma forma
4. abrir a porta do forno.
5. ver se nao tem nada dentro, caso tenha remover.
6. colocar a forma no forno.
7. ligar o forno a 180 graus
8. aguardar 40 minutos.
9. abrir o forno
10. Pegar o bolo pois esta pronto
11. Fechar o forno

## Programação declarativa

- Dizer os mesmos passos não sendo tão especifico aos passos mas sim ao que tem que ser feito:

1. Misturar os ingredientes
2. Ligar o forno
3. Colocar o bolo no forno
4. Quando estiver pronto, pegar o boleto do forno