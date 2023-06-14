


from flask import Flask,jsonify,render_template,request
import pandas as pd


app = Flask(__name__)

@app.route("/map")
def map():
    return render_template("map.html")

@app.route("/get_top10_recclass_count")
def get_top10_recclass_count():
    df = pd.read_json("static/data/final.json")
    count_df = df.groupby(by='recclass')['name'].count().reset_index()
    count_df.columns = ['recclass', 'count']
    count_df = count_df.sort_values(by='count', ascending=False)
    count_df = count_df.head(10)
    records = count_df.to_dict(orient="records")
    return jsonify(records)

@app.route("/get_year_count")
def get_year_count():
    fell = request.args.get("fell")
    df = pd.read_json("static/data/final.json")
    print(fell)
    if fell !='All':
        df = df[df['fall'] == fell]

    count_df = df.groupby(by='year')['name'].count().reset_index(0)
    count_df.columns =['year','count']
    records = count_df.to_dict(orient="records")
    return jsonify(records)


@app.route("/get_year_count_html")
def get_year_count_html():
    return render_template("year_count.html")

@app.route("/get_top10_recclass_count_html")
def get_top10_recclass_count_html():

    return render_template("top10_reclasss_count.html")



@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)



