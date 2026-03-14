import os
from flask import Flask, send_from_directory, jsonify

application = Flask(__name__, static_folder="static")


@application.route("/health")
def health():
    return jsonify({"status": "ok"}), 200


@application.route("/")
def index():
    return send_from_directory("static", "index.html")


@application.route("/<path:path>")
def serve(path):
    full = os.path.join(application.static_folder, path)
    if os.path.isfile(full):
        return send_from_directory("static", path)
    return send_from_directory("static", "index.html")


@application.errorhandler(404)
def not_found(e):
    return send_from_directory("static", "index.html")


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    application.run(host="0.0.0.0", port=port, debug=False)
