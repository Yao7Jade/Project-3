



import pandas as pd



df = pd.read_json("static/data/final.json")
count_df = df.groupby(by='year')['name'].count().reset_index(0)
records = count_df.to_dict(orient = "records")


# count_df = df.groupby(by='recclass')['name'].count().reset_index()
# count_df.columns = ['recclass','count']
# count_df = count_df.sort_values(by='count',ascending= False)
# count_df = count_df.head(10)
# records = count_df.to_dict(orient = "records")
