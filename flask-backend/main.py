from flask import Flask, render_template


app = Flask('__main__')



@app.route('/')
def index():
   return render_template('index.html',token='Just in case')




if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True) 
