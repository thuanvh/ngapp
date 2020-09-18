from gtts import gTTS
import os
import sys

filename = "meaning_vi.txt"
lang_code = "vi"

if len(sys.argv) > 2 :
  filename = sys.argv[1]
  lang_code = sys.argv[2]

f = open(filename, encoding="utf-8", mode="r")
fname = os.path.basename(filename).split('.')[0]
if not os.path.exists(fname):
  os.mkdir(fname)

count = 0
while True:
  line = f.readline()
  print(count, line)
  output_file = os.path.join(fname, str(count)+".mp3")
  if not os.path.exists(output_file) :
    try:
      tts = gTTS(line, lang=lang_code, lang_check=False)
      tts.save(output_file)
      pass
    except :
      #if os.path.exists(output_file) :
      #  os.remove(output_file)
      pass

  count += 1

  if not line:
    break

f.close()