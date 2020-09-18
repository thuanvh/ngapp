import json

import os
import sys

folder = r'../src/assets/data'
file_meaning = r'meaning_vi.txt'
file_sentence = r'sentence_vi.txt'
folder_output = r'full_vi'

files = [f for f in os.listdir(folder) if os.path.isfile(os.path.join(folder,f))]
f_meaning = open(file_meaning, 'r', encoding='utf-8')
f_sentence = open(file_sentence, 'r', encoding='utf-8')

if not os.path.exists(folder_output):
  os.mkdir(folder_output)

for f in files:
  jfile = os.path.join(folder, f)
  print(jfile)
  with open(jfile, encoding='utf-8') as json_file:
    content = json_file.read()
  print(content)
  obj = json.loads(content)#, encoding='utf-8')
  #obj = json.loads(content.decode("utf-8"))

  for o in obj:
    meaning_vi = f_meaning.readline().strip()
    o[3] = meaning_vi
    print(meaning_vi)
    
    sentence_vi = f_sentence.readline().strip()
    o[10] = sentence_vi
    print(sentence_vi)
  
  output_file_path = os.path.join(folder_output, os.path.basename(f))
  with open(output_file_path, 'w', encoding='utf-8') as outfile:
    json.dump(obj, outfile, ensure_ascii=False)

