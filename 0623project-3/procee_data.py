
import pandas as pd

df = pd.read_csv("Final.csv")
df = df[df['year'] >= 2000]
df = df.head(20000)

print(df['fall'].unique())
df.to_json("final.json",orient = "records")


