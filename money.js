var updateLog = "v0.0b01";
function updateFunc(){
  try{
    var out = new java.io.ByteArrayOutputStream();
    var response = android.net.http.AndroidHttpClient.newInstance("Online()").execute(new org.apache.http.client.methods.HttpGet("https://raw.githubusercontent.com/JDude420/Money-Mod/master/update-checker-01.txt")).getEntity().writeTo(out);
    out.close;
    if(String(out.toString())==updateLog){
      clientMessage("Your version: "+updateLog+"\nis the current\nupdate");
      ModPE.showTipMessage("§a**----===----**");
    }else{
      clientMessage("Your version: "+updateLog+"\nis outdated. Get version"+String(out.toString())+"at\n§6https://raw.githubusercontent.com/JDude420/Money-Mod/master/money.js");
      ModPE.showTipMessage("§4**----===----**");
  }catch(e){clientMessage("Please connect to the internet | Reason: Update");
}
function newLevel(){
  updateFunc();
}
