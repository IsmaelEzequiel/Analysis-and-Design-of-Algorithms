#-*-coding:cp1252-*-

def torres_hanoi(n,a,b,c):
  "Implementação das torres de Hanói"
  if n==1:
    print "move disco %d de %s para %s" % (n,a,c)
  else:
    torres_hanoi(n-1,a,c,b)
    print "Move disco %d de %s para %s" % (n,a,c)
    torres_hanoi(n-1,b,a,c)

print torres_hanoi(4,a='Início',b='Auxiliar',c='Fim')
