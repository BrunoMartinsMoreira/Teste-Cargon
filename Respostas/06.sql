-- Primeira abordagem, menos eficiente
SELECT DISTINCT 
	jogador_01.nome AS jogador_01_nome, 
	jogador_02.nome AS jogador_02_nome
FROM Partidas partida_1
JOIN Jogador jogador_01 
	ON partida_1.jogador1_id = jogador_01.id
JOIN Jogador jogador_02 
	ON partida_1.jogador2_id = jogador_02.id
WHERE (
  SELECT COUNT(*)
  FROM Partidas partida_2
  WHERE
    (partida_1.jogador1_id = partida_2.jogador1_id AND partida_1.jogador2_id = partida_2.jogador2_id)
    AND partida_2.duracao > 90
    AND (partida_2.pontos_jogador1 + partida_2.pontos_jogador2) > 30
) > 2;

-- Segunda abordagem, mais simples e eficiente
SELECT 
	jogador_01.nome AS jogador_01_nome, 
	jogador_02.nome AS jogador_02_nome
FROM Partidas partida
JOIN Jogador jogador_01 
	ON partida.jogador1_id = jogador_01.id
JOIN Jogador jogador_02 
	ON partida.jogador2_id = jogador_02.id
WHERE partida.duracao > 90
  AND (partida.pontos_jogador1 + partida.pontos_jogador2) > 30
GROUP BY jogador_01.nome, jogador_02.nome
HAVING COUNT(*) > 2;

-- Terceira abordagem, usando CTE, que li a respeito enquanto estudava para o teste e deixo aqui apenas a nivel de curiosidade, nunca cheguei a usar de fato em ambiente real

WITH CountedMatches AS (
    SELECT 
        partida.jogador1_id,
        partida.jogador2_id,
        COUNT(*) as match_count
    FROM Partidas partida
    WHERE 
        partida.duracao > 90 
        AND (partida.pontos_jogador1 + partida.pontos_jogador2) > 30
    GROUP BY 
        partida.jogador1_id, partida.jogador2_id
    HAVING 
        COUNT(*) > 2
)

SELECT DISTINCT
  jogador_01.nome AS jogador_01_nome, 
	jogador_02.nome AS jogador_02_nome
FROM CountedMatches cm
JOIN Jogador jogador_01 ON cm.jogador1_id = jogador_01.id
JOIN Jogador jogador_02 ON cm.jogador2_id = jogador_02.id;