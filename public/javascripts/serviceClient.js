var serviceClient = {
  waitId: null,
  doneId: null,
  getName: function(settings, waitingElementId, finishedElementId){
    this.waitId = waitingElementId;
    this.doneId = finishedElementId;
    var validRequest = this.postToServer(settings);
    if(validRequest == false){
      console.log("exiting, no object settings");
      return;
    }
  },
  postToServer: function(userData){
    if(userData == null && userData == undefined){
      console.log("settings object is undefined");
      return false;
    }else{
      console.log(userData);
      this.makeServiceCall('/petservice',userData, this.completedServiceRequest);
    }
  },
  completedServiceRequest: function(response){
    console.log(response);
    console.log("server completed");
    this.hideElement(this.waitId);
    this.showElement(this.doneId);
  },
  hideElement: function(id){
    console.log("finding: " + id)
    var waitingEl = document.getElementById(id);
    if(waitingEl === undefined){
      console.log("didnt find: " + id)
    }
    waitingEl.removeAttribute("style");
    waitingEl.setAttribute("style", "display:none");
  },
  showElement: function(id){
    console.log("finding: " + id)
    var waitingEl = document.getElementById(id);
    if(waitingEl === undefined){
      console.log("didnt find: " + id)
    }
    waitingEl.removeAttribute("style");
  },
  makeServiceCall: function(url, data, callback){
    var req = new window.XMLHttpRequest();
    req.open("GET", url, true);
    req.body= JSON.stringify(data);
    req.onreadystatechange = function() {
      if (req.readyState !== 4 || req.status !== 200 && req.status !== 304) {
        return;
      }
      callback(req.responseText);
    };
    if (req.readyState === 4) {
      return;
    }
    var res = req.send(JSON.stringify(data));
    this.completedServiceRequest(res);
  }
}
