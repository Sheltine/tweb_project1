const XMLHttpRequest = require('xhr2');
const fs = require("fs");

let swear_list=[];
var path = require("path");
getSwearWords(path.resolve("files/swear_words.txt"));

function getReposLanguagesStats(reposLanguages = []) {
    const stats = {};
    const countLanguages = o => {
      Object.keys(o).forEach(key => {
        const value = o[key];
        const current = stats[key] || 0;
        stats[key] = current + value;
      });
    };
    reposLanguages.forEach(countLanguages);
    return stats;
  }

  

function getSwearWords(file)
{
  let index = 0;
  let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(file)
  });
  
  lineReader.on('line', function (line) {
    swear_list[index] = line;
    ++index;
  });

}

//const swearWords = getSwearWords("swear_words.txt");

  function getDirtyCommits(commits) {
    let dirtyCommits = [];
    dirtyCommits[0] = commits;

      dirtyCommits[0].items = dirtyCommits[0].items.filter(function(i, n){
        for(let swi = 0; swi < swear_list.length; ++swi){
          if(i.commit.message.includes(swear_list[swi])){
            console.log(swear_list[swi]);
            return true;
          }
        }
        return false;
      })
    return dirtyCommits[0];
  }

  function ad(users) {
    console.log(users.length);
    let newUsers = []
    newUsers = users;
      newUsers = newUsers.filter(function(i, n){
        console.log(i.login.substring(0,2));
          if(i.login.substring(0,2) == "ad"){
            
            return true;
        }else{
          return false;
        }
      })
    return newUsers;
  }

  



  
  module.exports = {
    getReposLanguagesStats,
    getDirtyCommits,
    ad
  };
