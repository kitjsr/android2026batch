module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
        udise:String,
        schoolName:String,
        address:String,
        pinCode:String,
        state: String,
        district: String,
        city:String,
        status: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const School= mongoose.model("school", schema);
  return School;
}
