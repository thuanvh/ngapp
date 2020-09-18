import json

import os
import sys

folder = r'../src/assets/data'
outputfile_meaning = r'meaning.txt'
outputfile_sentence = r'sentence.txt'

files = [f for f in os.listdir(folder) if os.path.isfile(os.path.join(folder,f))]
foutput_meaning = open(outputfile_meaning, 'w', encoding='utf-8')
foutput_sentence = open(outputfile_sentence, 'w', encoding='utf-8')

for f in files:
  jfile = os.path.join(folder, f)
  print(jfile)
  with open(jfile, encoding='utf-8') as json_file:
    content = json_file.read()
  print(content)
  obj = json.loads(content)#, encoding='utf-8')
  #obj = json.loads(content.decode("utf-8"))

  for o in obj:
    meaning = o[3]
    print(meaning)
    foutput_meaning.write(meaning+"\n")

    sentence = o[10]
    print(sentence)
    foutput_sentence.write(sentence+"\n")
    
