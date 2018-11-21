var fs = require('fs');
  try{
	  fs.writeFileSync('skycolour.txt',txt)
  }catch(err){
	 console.log("Erorr while writing data" +err)
  }


