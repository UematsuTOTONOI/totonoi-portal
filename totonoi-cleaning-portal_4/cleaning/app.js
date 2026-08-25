"use strict";

/* ============ static reference data ============ */
var DATA = [{"id": "a1", "group": "ガゼボ", "name": "キッチン上換気扇（ガゼボ）", "freqText": "奇数月", "ruleType": "oddMonth", "ruleParams": null, "note": "全棟完了", "refCount": 3, "steps": "受付にある清掃グッズを使用・除菌シート・アルカリ水を使用して汚れを落とす・フィルター交換（セリアで都度購入）"}, {"id": "a2", "group": "ガゼボ", "name": "脱衣所換気扇（ガゼボ）", "freqText": "奇数月", "ruleType": "oddMonth", "ruleParams": null, "note": null, "refCount": 1, "steps": "受付にある清掃グッズを使用・除菌シート・アルカリ水を使用して汚れを落とす・フィルター交換（セリアで都度購入）"}, {"id": "a3", "group": "ガゼボ", "name": "スチーム（ガゼボ）", "freqText": "奇数月", "ruleType": "oddMonth", "ruleParams": null, "note": null, "refCount": 1, "steps": "体育館からケルヒャー、洗濯部屋からモップを持っていく・ケルヒャーに水を入れ・掃除しやすいようにダイニングテーブルの上に椅子を乗せる・その他備品も上にあげる、又は外に出す・ケルヒャーの機械を使いモップ掛け・終わったらモップを洗い、干す（※可能な月は週1回）"}, {"id": "a4", "group": "ガゼボ", "name": "ガゼボ窓ふき（ガゼボ）", "freqText": "奇数月", "ruleType": "oddMonth", "ruleParams": null, "note": null, "refCount": 1, "steps": "受付にある清掃グッズを使用・ガラスクリーナーを全体に吹きかける・濡れた雑巾で全体を拭く"}, {"id": "a5", "group": "ガゼボ", "name": "窓のサン（ガゼボ）", "freqText": "奇数月", "ruleType": "oddMonth", "ruleParams": null, "note": null, "refCount": 1, "steps": "受付にある清掃グッズを使用・ウェットシートを使ってサンを拭く"}, {"id": "a6", "group": "ガゼボ", "name": "電球（ガゼボ）", "freqText": "奇数月", "ruleType": "oddMonth", "ruleParams": null, "note": "8月から要確認", "refCount": 0, "steps": "受付にある清掃グッズを使用・脚立に上る・電球を除菌シートで拭く"}, {"id": "a7", "group": "ガゼボ", "name": "ガスグリル上換気扇（ガゼボ）", "freqText": "奇数月（手順書では週1・1棟ずつの記載あり／要確認）", "ruleType": "oddMonth", "ruleParams": null, "note": null, "refCount": 2, "steps": "受付にある清掃グッズを使用・プロペラと枠を外す・アルカリ電解水を吹きかけ2〜3分待つ・アルコール除菌シートで拭き取る"}, {"id": "a8", "group": "ガゼボ", "name": "ガスグリル（ガゼボ）", "freqText": "奇数月（手順書では週1・1棟ずつの記載あり／要確認）", "ruleType": "oddMonth", "ruleParams": null, "note": null, "refCount": 0, "steps": "全体の黒い油汚れをスクレーパーで削る・受け皿も同様に黒い油汚れをスクレーパーで削る・グリル全体をアルカリ＋除菌シートで拭く"}, {"id": "a9", "group": "ガゼボ", "name": "エアコン（ガゼボ）", "freqText": "奇数月", "ruleType": "oddMonth", "ruleParams": null, "note": null, "refCount": 1, "steps": "受付にある清掃グッズを使用・エアコンの蓋を外す・中のフィルターをすべて外しクリーナー使用（缶に説明書あり）・エアコンのコンセントを抜く・フィン部分にエアコンクリーナー（都度購入）を吹きかける・10分以上放置し、その間に外した部品をウェットシートとアルカリ電解水で拭く・拭き終わったら部品をはめる"}, {"id": "a10", "group": "ガゼボ", "name": "電子レンジ・冷蔵庫内掃除（ガゼボ）", "freqText": "奇数月", "ruleType": "oddMonth", "ruleParams": null, "note": null, "refCount": 1, "steps": null}, {"id": "a11", "group": "ガゼボ", "name": "浴室防カビ（ガゼボ）", "freqText": "奇数月", "ruleType": "oddMonth", "ruleParams": null, "note": "今後7月中旬に1回やる", "refCount": 0, "steps": null}, {"id": "b1", "group": "ドーム", "name": "ドーム淵埃取り（ドーム）", "freqText": "偶数月", "ruleType": "evenMonth", "ruleParams": null, "note": null, "refCount": 0, "steps": "受付にある清掃グッズを使用・クイックルワイパー（乾いたもの）を使ってドーム室内の淵を拭く"}, {"id": "b2", "group": "ドーム", "name": "エアコン（ドーム）", "freqText": "偶数月", "ruleType": "evenMonth", "ruleParams": null, "note": null, "refCount": 0, "steps": "受付にある清掃グッズを使用・エアコンの蓋を外す・中のフィルターをすべて外す・エアコンのコンセントを抜く・フィン部分にエアコンクリーナー（都度購入）を吹きかける・10分以上放置し、その間に外した部品をウェットシートとアルカリ電解水で拭く・拭き終わったら部品をはめる"}, {"id": "b3", "group": "ドーム", "name": "スチーム（ドーム）", "freqText": "偶数月", "ruleType": "evenMonth", "ruleParams": null, "note": null, "refCount": 0, "steps": "体育館からケルヒャー、洗濯部屋からモップを持っていく・ケルヒャーに水を入れ・掃除しやすいようにダイニングテーブルの上に椅子を乗せる・その他備品も上にあげる、又は外に出す・ケルヒャーの機械を使いモップ掛け・終わったらモップを洗い、干す（※可能な月は週1回）"}, {"id": "b4", "group": "ドーム", "name": "ドーム中窓ふき（ドーム）", "freqText": "偶数月", "ruleType": "evenMonth", "ruleParams": null, "note": null, "refCount": 0, "steps": "たたみ部屋からタオルを用意・タオルを水で濡らして良く絞る・透明な部分（下から二段目まで）を拭く。三段目は汚れている部分があれば拭く"}, {"id": "b5", "group": "ドーム", "name": "外窓ふき（ドーム）", "freqText": "偶数月（12・2月は飛ばす）", "ruleType": "evenMonthSkip", "ruleParams": {"months": [4, 6, 8, 10]}, "note": null, "refCount": 0, "steps": "用意する物：バケツ・モップ・ホース（長め）・ドーム専用ウォッシャー（受付棟にある）・ホースをつなぐ・軽くドームの透明な部分を濡らす・バケツにウォッシャー液1：水9の割合で入れる・モップでドームの透明な部分を優しく拭く・窓以外の汚れも磨く・水で洗い流す・自然乾燥（※ドーム専用の洗浄液以外は使用しないこと。洗剤NG）"}, {"id": "b6", "group": "ドーム", "name": "ネジ締め（ドーム）", "freqText": "年2回（6月・10月）", "ruleType": "annualMonths", "ruleParams": {"months": [6, 10]}, "note": "A確認 他済み", "refCount": 0, "steps": "【ベッド】六角レンチを使う（ナガヤ玄関）・マットレスをどかす・すのこを外す・ネジが緩んでいる所を固く締める・すのこを戻す・マットレスを戻す 【G棟椅子】六角レンチを使う・ダイニングの椅子を裏返し、ネジが緩んでいる部分を直す"}, {"id": "b7", "group": "ドーム", "name": "布団交換（ドーム）", "freqText": "夏用→冬用は10月末、冬用→夏用は6月末", "ruleType": "annualMonths", "ruleParams": {"months": [6, 10]}, "note": "6/20〜6/22布団交換 OK", "refCount": 1, "steps": "布団回収（101に布団収納）・洗濯・干す（※シングル・セミダブルは区別して別々に洗濯する）"}, {"id": "b8", "group": "ドーム", "name": "Gソファカバー交換", "freqText": "3ヶ月ごと／定休日", "ruleType": "everyNMonths", "ruleParams": {"n": 3}, "note": "汚れていたら交換", "refCount": 1, "steps": null}, {"id": "c1", "group": "受付", "name": "窓ふき（受付）", "freqText": "毎月第1週に清掃", "ruleType": "monthlyWeek1", "ruleParams": null, "note": null, "refCount": 0, "steps": "受付にある清掃グッズを使用・ガラスクリーナーを全体に吹きかける・濡れた雑巾で全体を拭く"}, {"id": "c2", "group": "受付", "name": "フロア清掃（受付・スチーム）", "freqText": "毎月第1週に清掃", "ruleType": "monthlyWeek1", "ruleParams": null, "note": null, "refCount": 0, "steps": "体育館からケルヒャーを用意・ケルヒャーの機械を使いモップ掛け"}, {"id": "c3", "group": "受付", "name": "キッチン清掃（受付）", "freqText": "毎月第1週に清掃", "ruleType": "monthlyWeek1", "ruleParams": null, "note": null, "refCount": 0, "steps": "清掃用具はシンク下、引き出しにあり・ハイターを使用・排水溝部分を外してハイターをかける・10分ほど放置して洗い流す"}, {"id": "d1", "group": "サウナ", "name": "サウナ窓ふき（サウナ）", "freqText": "定休日（頻度の定めなし）", "ruleType": "manual", "ruleParams": null, "note": null, "refCount": 0, "steps": "アルカリ電解水＋ウェットシートで拭く（内側・外側）"}, {"id": "d2", "group": "サウナ", "name": "サウナ煙突（サウナ）", "freqText": "2ヶ月ごと／定休日", "ruleType": "everyNMonths", "ruleParams": {"n": 2}, "note": null, "refCount": 1, "steps": "必要アイテム：115φの煙突掃除ブラシ・マイナスドライバー・汚れても良い服装・軍手・脚立・煙突トップをマイナスドライバーで外してブラシを入れ回しながら清掃するとススが灰受け皿に落ちるので、溜まったススを取り除く・定期的な清掃で燃焼効率の維持と煙突詰まりの予防になる・水洗いでの洗浄は非推奨（鋳物が錆びる可能性、取り外し再取付が難しい）・ハシゴ使用時は高所作業に注意"}, {"id": "e1", "group": "その他", "name": "洗車", "freqText": "2週間に1回", "ruleType": "biweekly", "ruleParams": null, "note": null, "refCount": 1, "steps": null}, {"id": "e2", "group": "その他", "name": "ゴミステーション掃除", "freqText": "定休日（頻度の定めなし）", "ruleType": "manual", "ruleParams": null, "note": null, "refCount": 0, "steps": "手で取れるゴミは先に取る・洗濯置き場の水道からホースをつなげる・コンセントをつないでケルヒャーで全体的に洗浄"}, {"id": "e3", "group": "その他", "name": "草刈り", "freqText": "2週間に1回", "ruleType": "biweekly", "ruleParams": null, "note": null, "refCount": 4, "steps": "草刈りの格好（長袖・長ズボン・長靴・保護メガネ）を装着・薪小屋にある草刈り機械を使用・受付事務所で充電しているバッテリーを差し込む・威力2でスタート・右手のアームボタンを押しながら伐採する・使い終わった道具は元に戻す"}, {"id": "e4", "group": "その他", "name": "ペンキ塗り", "freqText": "1年に1回（冬）", "ruleType": "everyNMonths", "ruleParams": {"n": 12}, "note": null, "refCount": 0, "steps": null}, {"id": "e5", "group": "その他", "name": "建具調整", "freqText": "年2回（6月・10月）", "ruleType": "annualMonths", "ruleParams": {"months": [6, 10]}, "note": null, "refCount": 0, "steps": null}];
var DATA_BY_ID = {};
DATA.forEach(function(d){ DATA_BY_ID[d.id] = d; });

var GROUP_ORDER = ["ガゼボ","ドーム","受付","サウナ","その他"];
var GROUP_LABEL = {
  "ガゼボ": "ガゼボ棟",
  "ドーム": "ドーム棟",
  "受付": "受付",
  "サウナ": "サウナ",
  "その他": "敷地・その他"
};

var SETTINGS_KEY = "totonoi_cleaning_gh_settings_v1";
var LAST_PERSON_KEY = "totonoi_cleaning_last_person";
var STATE_PATH = "state.json";
var POLL_MS = 60000;

/* ============ date helpers ============ */
function pad(n){ return n<10 ? "0"+n : ""+n; }
function ymd(d){ return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate()); }
function parseISO(s){ if(!s) return null; var p=s.split("-").map(Number); return new Date(p[0],p[1]-1,p[2]); }
function addDays(d,n){ var r=new Date(d.getTime()); r.setDate(r.getDate()+n); return r; }
function addMonths(d,n){ var r=new Date(d.getTime()); r.setMonth(r.getMonth()+n); return r; }
function todayDate(){ var n=new Date(); return new Date(n.getFullYear(),n.getMonth(),n.getDate()); }
var WD=["日","月","火","水","木","金","土"];
function fmtJP(d){ if(!d) return "―"; return (d.getMonth()+1)+"/"+d.getDate()+"("+WD[d.getDay()]+")"; }
function fmtISOJP(iso){ return iso ? fmtJP(parseISO(iso)) : "―"; }
function fmtMD(iso){ var d=parseISO(iso); return d ? (d.getMonth()+1)+"/"+d.getDate() : "―"; }
function fmtClock(d){ return pad(d.getHours())+":"+pad(d.getMinutes()); }

/* ============ frequency classification ============ */
function nextAllowedOnOrAfter(allowed, year, month){
  for(var i=0;i<24;i++){
    var mm=((month-1+i)%12)+1;
    var yy=year+Math.floor((month-1+i)/12);
    if(allowed.indexOf(mm)>=0) return {year:yy,month:mm};
  }
  return null;
}
function latestAllowedOnOrBefore(allowed, year, month){
  for(var i=0;i<24;i++){
    var mm=month-i, yy=year;
    while(mm<=0){ mm+=12; yy-=1; }
    if(allowed.indexOf(mm)>=0) return {year:yy,month:mm};
  }
  return null;
}
function classifyMonthWindow(allowed, lastDone, today){
  var cur=latestAllowedOnOrBefore(allowed, today.getFullYear(), today.getMonth()+1);
  var searchY=cur.year, searchM=cur.month+1;
  if(searchM>12){ searchM=1; searchY+=1; }
  var nxt=nextAllowedOnOrAfter(allowed, searchY, searchM);
  var curStart=new Date(cur.year,cur.month-1,1);
  var nextStart=new Date(nxt.year,nxt.month-1,1);
  var doneThisCycle = lastDone && lastDone>=curStart && lastDone<nextStart;
  if(doneThisCycle) return {status:"scheduled", due:nextStart};
  if(cur.year===today.getFullYear() && cur.month===today.getMonth()+1) return {status:"due", due:curStart};
  return {status:"overdue", due:curStart};
}
function classifyEveryNMonths(n, lastDone, today){
  if(!lastDone) return {status:"due", due:today};
  var due=addMonths(lastDone,n);
  if(due<today) return {status:"overdue", due:due};
  if(due<=addDays(today,14)) return {status:"due", due:due};
  return {status:"scheduled", due:due};
}
function classifyBiweekly(lastDone, today){
  if(!lastDone) return {status:"due", due:today};
  var due=addDays(lastDone,14);
  if(due<today) return {status:"overdue", due:due};
  if(due<=addDays(today,3)) return {status:"due", due:due};
  return {status:"scheduled", due:due};
}
function classifyMonthlyWeek1(lastDone, today){
  var y=today.getFullYear(), m=today.getMonth();
  var winStart=new Date(y,m,1), winEnd=new Date(y,m,7);
  var doneThisCycle = lastDone && lastDone>=winStart && lastDone<=winEnd;
  var nextStart=new Date(y,m+1,1);
  if(doneThisCycle) return {status:"scheduled", due:nextStart};
  if(today<=winEnd) return {status:"due", due:winStart};
  return {status:"overdue", due:winEnd};
}
function classify(item, today){
  if(item.ruleType==="manual") return {status:"manual", due:null};
  var lastDone = item.lastDone ? parseISO(item.lastDone) : null;
  switch(item.ruleType){
    case "oddMonth": return classifyMonthWindow([1,3,5,7,9,11], lastDone, today);
    case "evenMonth": return classifyMonthWindow([2,4,6,8,10,12], lastDone, today);
    case "evenMonthSkip": return classifyMonthWindow(item.ruleParams.months, lastDone, today);
    case "annualMonths": return classifyMonthWindow(item.ruleParams.months, lastDone, today);
    case "everyNMonths": return classifyEveryNMonths(item.ruleParams.n, lastDone, today);
    case "biweekly": return classifyBiweekly(lastDone, today);
    case "monthlyWeek1": return classifyMonthlyWeek1(lastDone, today);
    default: return {status:"manual", due:null};
  }
}
var STATUS_LABEL = {overdue:"期限超過", due:"清掃時期", scheduled:"順調", manual:"随時", unlogged:"未記録"};
/**
 * Wraps classify() with one UX rule: an item that has NEVER been logged
 * shows as "未記録" (not yet recorded) instead of an alarming "overdue" —
 * there is no real evidence anything was missed, only that no one has
 * logged a baseline yet. Once an item has at least one history entry,
 * its real computed status (overdue/due/scheduled) is shown as-is.
 */
function displayStatus(item, today){
  var c = classify(item, today);
  if(item.history.length===0 && (c.status==="overdue" || c.status==="due")){
    return {status:"unlogged", due:c.due};
  }
  return c;
}
function shortName(item){
  var suf = "（"+item.group+"）";
  if(item.name.slice(-suf.length)===suf) return item.name.slice(0, -suf.length);
  return item.name;
}
/* ============ per-record completion status: 一部完了 / 完了 ============ */
var COMPLETION_LABEL = {partial:"一部完了", complete:"完了"};
/** Records saved before this feature existed have no status — treat them as a full 完了. */
function completionOf(h){ return (h && h.status==="partial") ? "partial" : "complete"; }
function completionTag(status){
  return '<span class="comp-tag '+status+'">'+COMPLETION_LABEL[status]+'</span>';
}
function ruleSummary(item){
  switch(item.ruleType){
    case "oddMonth": return "奇数月（1・3・5・7・9・11月）に1回";
    case "evenMonth": return "偶数月（2・4・6・8・10・12月）に1回";
    case "evenMonthSkip": return "偶数月（"+item.ruleParams.months.join("・")+"月）に1回";
    case "annualMonths": return "年"+item.ruleParams.months.length+"回（"+item.ruleParams.months.join("月・")+"月）";
    case "everyNMonths": return item.ruleParams.n+"ヶ月ごとに1回";
    case "biweekly": return "2週間に1回";
    case "monthlyWeek1": return "毎月第1週（1〜7日）に1回";
    case "manual": return "随時（頻度指定なし）";
    default: return "";
  }
}

/* ============ state ============ */
var STATE = {items:{}};
var lastSyncedAt = null;

function mergedItem(id){
  var base = DATA_BY_ID[id];
  var s = STATE.items[id] || {};
  return {
    id: id, group: base.group, name: base.name, steps: base.steps, refCount: base.refCount,
    lastDone: s.lastDone || null,
    history: s.history || [],
    freqText: (s.override && s.override.freqText) || base.freqText,
    ruleType: (s.override && s.override.ruleType) || base.ruleType,
    ruleParams: (s.override && s.override.ruleParams) || base.ruleParams,
    note: (s.override && s.override.note!=null) ? s.override.note : base.note
  };
}
function allMerged(){ return DATA.map(function(d){ return mergedItem(d.id); }); }
function recomputeLastDone(s){
  if(!s.history || !s.history.length){ s.lastDone = null; return; }
  var max = null;
  s.history.forEach(function(h){ if(!max || h.date>max) max = h.date; });
  s.lastDone = max;
}
/** date -> [{itemId,itemName,person,memo,status,histIndex}], newest history entries last-in per item preserved by index */
function recordsByDate(){
  var map = {};
  DATA.forEach(function(d){
    var s = STATE.items[d.id];
    if(!s || !s.history) return;
    s.history.forEach(function(h, idx){
      if(!map[h.date]) map[h.date] = [];
      map[h.date].push({itemId:d.id, itemName:d.name, person:h.person, memo:h.memo, status:completionOf(h), histIndex:idx});
    });
  });
  return map;
}

/* ============ GitHub settings & sync ============ */
function loadSettings(){
  try{ var raw = localStorage.getItem(SETTINGS_KEY); return raw ? JSON.parse(raw) : null; }
  catch(e){ return null; }
}
function saveSettings(s){
  try{ localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); }catch(e){}
}
function isConfigured(){
  var s = loadSettings();
  return !!(s && s.owner && s.repo && s.token);
}
function loadLastPerson(){
  try{ return localStorage.getItem(LAST_PERSON_KEY) || ""; }catch(e){ return ""; }
}
function saveLastPerson(name){
  try{ localStorage.setItem(LAST_PERSON_KEY, name); }catch(e){}
}

function utf8ToBase64(str){
  var bytes = new TextEncoder().encode(str);
  var bin = "";
  for(var i=0;i<bytes.length;i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}
function base64ToUtf8(b64){
  var bin = atob(b64.replace(/\n/g,""));
  var bytes = new Uint8Array(bin.length);
  for(var i=0;i<bin.length;i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}
function ghApiUrl(settings){
  return "https://api.github.com/repos/"+settings.owner+"/"+settings.repo+"/contents/"+(settings.path||STATE_PATH);
}
function ghHeaders(settings){
  return { "Authorization": "token "+settings.token, "Accept": "application/vnd.github+json" };
}
function ghGetShaAndContent(settings){
  var url = ghApiUrl(settings) + "?ref=" + encodeURIComponent(settings.branch||"main") + "&_=" + Date.now();
  return fetch(url, {headers: ghHeaders(settings)}).then(function(res){
    if(!res.ok){ return res.text().then(function(t){ var e=new Error("gh get failed"); e.ghStatus=res.status; e.body=t; throw e; }); }
    return res.json();
  }).then(function(data){
    return {sha: data.sha, content: JSON.parse(base64ToUtf8(data.content))};
  });
}
function ghPutContent(settings, stateObj, sha, message){
  var body = {
    message: message || "清掃記録を更新",
    content: utf8ToBase64(JSON.stringify(stateObj, null, 2)),
    branch: settings.branch || "main"
  };
  if(sha) body.sha = sha;
  return fetch(ghApiUrl(settings), {
    method: "PUT",
    headers: Object.assign({"Content-Type":"application/json"}, ghHeaders(settings)),
    body: JSON.stringify(body)
  }).then(function(res){
    if(!res.ok){ return res.text().then(function(t){ var e=new Error("gh put failed"); e.ghStatus=res.status; e.body=t; throw e; }); }
    return res.json();
  });
}

function fetchStateFromPages(){
  return fetch("./"+STATE_PATH+"?_="+Date.now(), {cache:"no-store"}).then(function(res){
    if(!res.ok) throw new Error("state fetch failed: "+res.status);
    return res.json();
  });
}

/**
 * Applies mutateFn to STATE optimistically, then to the freshest remote
 * copy, and commits it to GitHub. On a 409 (someone else committed first)
 * retries once against the newest copy. `onSettled` runs after every
 * outcome (success or failure) so open dialogs can refresh their content.
 */
function mutateAndSave(mutateFn, commitMessage, onSettled){
  if(!isConfigured()){
    showToast("先にGitHub連携の設定をしてください");
    openSettings();
    if(onSettled) onSettled(false);
    return;
  }
  mutateFn(STATE);
  paint();
  var settings = loadSettings();
  showToast("保存中…");
  ghGetShaAndContent(settings).then(function(cur){
    mutateFn(cur.content);
    return ghPutContent(settings, cur.content, cur.sha, commitMessage).then(function(){
      STATE = cur.content;
      lastSyncedAt = new Date();
      paint();
      showToast("保存しました");
      if(onSettled) onSettled(true);
    });
  }).catch(function(err){
    if(err && err.ghStatus===409){
      return ghGetShaAndContent(settings).then(function(cur2){
        mutateFn(cur2.content);
        return ghPutContent(settings, cur2.content, cur2.sha, commitMessage);
      }).then(function(){
        return fetchStateFromPages();
      }).then(function(remote){
        STATE = remote;
        lastSyncedAt = new Date();
        paint();
        showToast("保存しました（競合を自動解消）");
        if(onSettled) onSettled(true);
      }).catch(function(){
        showToast("保存に失敗しました。もう一度お試しください");
        if(onSettled) onSettled(false);
      });
    }
    if(err && err.ghStatus===401){ showToast("トークンが無効です。設定を確認してください"); if(onSettled) onSettled(false); return; }
    if(err && err.ghStatus===404){ showToast("リポジトリ / state.json が見つかりません。設定を確認してください"); if(onSettled) onSettled(false); return; }
    showToast("保存に失敗しました"+(err&&err.ghStatus?"（"+err.ghStatus+"）":""));
    if(onSettled) onSettled(false);
  });
}

/* ============ small render helpers ============ */
function esc(s){
  return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
function chip(status){
  return '<span class="chip '+status+'"><span class="chip-dot"></span>'+STATUS_LABEL[status]+'</span>';
}
function recordLine(h){
  var who = h.person ? esc(h.person) : "担当者不明";
  return completionTag(completionOf(h))+' '+esc(fmtISOJP(h.date))+' <b>'+who+'</b>'+(h.memo?(' — '+esc(h.memo)):'');
}

/* ============ today tab: compact, grouped, unlogged-aware ============ */
function renderTaskCard(it, ds){
  var last = it.history.length ? it.history[it.history.length-1] : null;
  var lastHtml = last ? '前回: '+recordLine(last) : '前回の記録なし（初回の記録をお願いします）';
  return (
    '<div class="task-card '+ds.status+'" data-id="'+it.id+'">'+
      '<div class="task-card-main">'+
        '<div class="task-card-top">'+chip(ds.status)+'<span class="task-card-name">'+esc(shortName(it))+'</span></div>'+
        '<div class="task-card-sub">'+esc(ruleSummary(it))+(it.note?(' ・ '+esc(it.note)):'')+'</div>'+
        '<div class="task-card-last">'+lastHtml+'</div>'+
      '</div>'+
      '<button class="btn primary" data-action="log" data-id="'+it.id+'">記録する</button>'+
    '</div>'
  );
}
function renderTodayTab(today){
  var order = {overdue:0, due:1, unlogged:2};
  var items = allMerged().map(function(it){ return {it:it, ds:displayStatus(it, today)}; })
    .filter(function(x){ return order[x.ds.status]!=null; })
    .sort(function(a,b){
      if(order[a.ds.status]!==order[b.ds.status]) return order[a.ds.status]-order[b.ds.status];
      return GROUP_ORDER.indexOf(a.it.group)-GROUP_ORDER.indexOf(b.it.group);
    });
  if(!items.length){
    return '<div class="empty-state"><p class="empty-title">🎉 対応が必要な項目はありません</p>'+
      '<p class="empty-sub">今のところ、期限が来ている定期清掃はありません。</p></div>';
  }
  var byGroup = {}, order2 = [];
  items.forEach(function(x){
    if(!byGroup[x.it.group]){ byGroup[x.it.group]=[]; order2.push(x.it.group); }
    byGroup[x.it.group].push(x);
  });
  var html = GROUP_ORDER.filter(function(g){ return byGroup[g]; }).map(function(g){
    var list = byGroup[g];
    return (
      '<section class="task-group">'+
        '<div class="task-group-head"><span>'+esc(GROUP_LABEL[g])+'</span><span class="task-group-count">'+list.length+'件</span></div>'+
        list.map(function(x){ return renderTaskCard(x.it, x.ds); }).join("")+
      '</section>'
    );
  }).join("");
  return '<div id="today-tab">'+html+'</div>';
}

/* ============ calendar ============ */
var calYear, calMonth; // calMonth: 0-11
function buildCalendarCells(year, month){
  var first = new Date(year, month, 1);
  var startWeekday = first.getDay();
  var daysInMonth = new Date(year, month+1, 0).getDate();
  var cells = [];
  for(var i=0;i<startWeekday;i++) cells.push(null);
  for(var d=1; d<=daysInMonth; d++) cells.push(new Date(year,month,d));
  while(cells.length % 7 !== 0) cells.push(null);
  return cells;
}
function renderCalendar(today){
  var recs = recordsByDate();
  var cells = buildCalendarCells(calYear, calMonth);
  var todayStr = ymd(today);
  var dowRow = WD.map(function(w){ return '<div class="cal-dow">'+w+'</div>'; }).join("");
  var cellsHtml = cells.map(function(d){
    if(!d) return '<div class="cal-cell empty"></div>';
    var ds = ymd(d);
    var recList = recs[ds] || [];
    var partialCount=0, completeCount=0;
    recList.forEach(function(r){ if(r.status==="partial") partialCount++; else completeCount++; });
    var cls = "cal-cell" + (ds===todayStr ? " today" : "");
    var dots = "";
    if(partialCount) dots += '<span class="cal-dot partial">'+partialCount+'</span>';
    if(completeCount) dots += '<span class="cal-dot complete">'+completeCount+'</span>';
    return '<button type="button" class="'+cls+'" data-date="'+ds+'"><span class="cal-daynum">'+d.getDate()+'</span>'+dots+'</button>';
  }).join("");
  return (
    '<section class="group" id="calendar">'+
      '<div class="group-head"><span class="group-title">清掃カレンダー</span>'+
      '<span class="group-count">日付をタップして記録</span></div>'+
      '<div class="cal-card">'+
        '<div class="cal-head">'+
          '<button type="button" class="btn sm" id="cal-prev">‹</button>'+
          '<span class="cal-label">'+calYear+'年'+(calMonth+1)+'月</span>'+
          '<button type="button" class="btn sm" id="cal-next">›</button>'+
        '</div>'+
        '<div class="cal-grid">'+dowRow+cellsHtml+'</div>'+
      '</div>'+
    '</section>'
  );
}

/** Compact "this month's outstanding items" list shown above the calendar grid:
 *  item name + the dates already logged this browsed month (colored by 一部完了/完了).
 *  Tapping a row opens that item's full record history. */
function renderMonthlyTargets(today){
  var order = {overdue:0, due:1, unlogged:2};
  var items = allMerged().map(function(it){ return {it:it, ds:displayStatus(it, today)}; })
    .filter(function(x){ return order[x.ds.status]!=null; })
    .sort(function(a,b){
      if(order[a.ds.status]!==order[b.ds.status]) return order[a.ds.status]-order[b.ds.status];
      return GROUP_ORDER.indexOf(a.it.group)-GROUP_ORDER.indexOf(b.it.group);
    });
  if(!items.length){
    return '<div class="target-empty">今月、対応が必要な項目はありません。</div>';
  }
  var rows = items.map(function(x){
    var it = x.it;
    var monthHist = it.history.filter(function(h){
      var d = parseISO(h.date);
      return d && d.getFullYear()===calYear && d.getMonth()===calMonth;
    }).slice().sort(function(a,b){ return a.date<b.date?-1:(a.date>b.date?1:0); });
    var datesHtml = monthHist.length
      ? monthHist.map(function(h){ return '<span class="target-date '+completionOf(h)+'">'+esc(fmtMD(h.date))+'</span>'; }).join("")
      : '<span class="target-date-empty">今月まだ記録なし</span>';
    return (
      '<button type="button" class="target-row" data-item="'+it.id+'">'+
        '<span class="target-name">'+esc(GROUP_LABEL[it.group])+' '+esc(shortName(it))+'</span>'+
        '<span class="target-dates">'+datesHtml+'</span>'+
      '</button>'
    );
  }).join("");
  return '<div class="target-list">'+rows+'</div>';
}
function renderCalendarTab(today){
  return (
    '<section class="group" id="targets">'+
      '<div class="group-head"><span class="group-title">今月の対象項目</span>'+
      '<span class="group-count">タップで記録を確認</span></div>'+
      renderMonthlyTargets(today)+
    '</section>'+
    renderCalendar(today)
  );
}

/* ============ full item list (grouped, collapsible) ============ */
function renderCard(item, today){
  var c = classify(item, today);
  var dueLine;
  if(c.status==="manual") dueLine = '<span>頻度: 決まりなし（都度判断）</span>';
  else if(c.status==="scheduled") dueLine = '<span>次回目安: <b>'+esc(fmtJP(c.due))+'</b></span>';
  else dueLine = '<span>目安日: <b>'+esc(fmtJP(c.due))+'</b></span>';
  var lastLine = item.lastDone ? '<span>前回: <b>'+esc(fmtISOJP(item.lastDone))+'</b></span>' : '<span>前回: 記録なし</span>';
  var noteHtml = item.note ? '<div class="card-note">備考: '+esc(item.note)+'</div>' : '';
  var stepsHtml;
  if(item.steps){
    var parts = item.steps.split("・").map(function(s){return s.trim();}).filter(Boolean);
    stepsHtml = '<h4>手順</h4><ol class="proc-list">'+parts.map(function(p){return '<li>'+esc(p)+'</li>';}).join("")+'</ol>';
  } else {
    stepsHtml = '<p class="proc-empty">手順書は未登録です。「頻度・備考を編集」から追記できます。</p>';
  }
  var histHtml = "";
  if(item.history && item.history.length){
    var hrows = item.history.slice().reverse().slice(0,6).map(function(h){
      return '<li>'+recordLine(h)+'</li>';
    }).join("");
    histHtml = '<h4 style="margin-top:14px">記録履歴</h4><ul class="hist-list">'+hrows+'</ul>';
  }
  var refHtml = (item.refCount!=null) ? '<div class="ref">参考: 旧シート記録上の年間実施回数 '+item.refCount+'回</div>' : '';
  return (
    '<article class="card" data-id="'+item.id+'">'+
      '<div class="card-head">'+
        '<div><p class="card-name">'+esc(item.name)+'</p><p class="card-freq">'+esc(ruleSummary(item))+'</p></div>'+
        chip(c.status)+
      '</div>'+
      '<div class="card-meta">'+lastLine+dueLine+'</div>'+
      noteHtml+
      '<div class="card-actions">'+
        '<button class="btn primary" data-action="log" data-id="'+item.id+'">清掃完了を記録</button>'+
        '<button class="btn" data-action="edit" data-id="'+item.id+'">頻度・備考を編集</button>'+
      '</div>'+
      '<details class="proc"><summary>手順・履歴を見る</summary><div class="proc-body">'+stepsHtml+histHtml+refHtml+'</div></details>'+
    '</article>'
  );
}
function renderAllItemsTab(today){
  var html = GROUP_ORDER.map(function(g){
    var items = allMerged().filter(function(it){ return it.group===g; });
    if(!items.length) return "";
    return (
      '<section class="group" id="g-'+esc(g)+'">'+
        '<div class="group-head"><span class="group-title">'+esc(GROUP_LABEL[g])+'</span>'+
        '<span class="group-count">'+items.length+'項目</span></div>'+
        items.map(function(it){ return renderCard(it, today); }).join("")+
      '</section>'
    );
  }).join("");
  return '<div id="all-tab">'+html+'</div>';
}
function renderTabBar(){
  return '<div class="tabbar" role="tablist">'+TABS.map(function(t){
    return '<button type="button" class="tab-btn'+(t.key===activeTab?' active':'')+'" data-tab="'+t.key+'" role="tab">'+t.label+'</button>';
  }).join("")+'</div>';
}
function renderHeader(today){
  return (
    '<div class="topbar"><div class="topbar-inner">'+
      '<div class="topbar-title-row">'+
        '<div><p class="eyebrow">TOTONOI 富士山中湖 &middot; '+(today.getFullYear())+'/'+pad(today.getMonth()+1)+'/'+pad(today.getDate())+'</p>'+
        '<h1 class="h1">定期清掃ポータル</h1></div>'+
        '<button type="button" class="icon-btn" id="settings-btn" aria-label="設定">⚙︎</button>'+
      '</div>'+
      '<p class="sync-line">'+syncLine()+'</p>'+
      renderTabBar()+
    '</div></div>'
  );
}

var root, dlgLog, dlgEdit, dlgSettings, dlgDay, dlgHist, toastEl;
var curDayDate = null;
var TABS = [{key:"today",label:"今日のタスク"},{key:"calendar",label:"カレンダー"},{key:"all",label:"項目一覧"}];
var activeTab = "today";

function syncLine(){
  var settings = loadSettings();
  if(!settings || !settings.owner || !settings.repo || !settings.token){
    return '<span class="sync-warn">未設定：清掃記録を保存するには「設定」からGitHub連携を行ってください</span>';
  }
  return '<span class="sync-ok">'+esc(settings.owner+"/"+settings.repo)+(lastSyncedAt?(' ・最終同期 '+fmtClock(lastSyncedAt)):' ・読み込み済み')+'</span>';
}

function paint(){
  var today = todayDate();
  var body;
  if(activeTab==="calendar") body = '<div id="calendar-tab">'+renderCalendarTab(today)+'</div>';
  else if(activeTab==="all") body = renderAllItemsTab(today);
  else body = renderTodayTab(today);
  root.innerHTML =
    renderHeader(today)+
    '<div class="wrap">'+
      body+
      '<p class="foot">全'+DATA.length+'項目 &middot; 記録するとGitHubリポジトリの state.json に保存されます。</p>'+
    '</div>';
  wireRoot();
  if(dlgDay && (dlgDay.open || dlgDay.hasAttribute('open')) && curDayDate){
    refreshDayList();
  }
}

function wireRoot(){
  root.querySelectorAll('[data-action="log"]').forEach(function(btn){
    btn.addEventListener('click', function(){ openLog(btn.getAttribute('data-id')); });
  });
  root.querySelectorAll('[data-action="edit"]').forEach(function(btn){
    btn.addEventListener('click', function(){ openEdit(btn.getAttribute('data-id')); });
  });
  root.querySelectorAll('.cal-cell[data-date]').forEach(function(btn){
    btn.addEventListener('click', function(){ openDay(btn.getAttribute('data-date')); });
  });
  root.querySelectorAll('.target-row[data-item]').forEach(function(btn){
    btn.addEventListener('click', function(){ openItemHistory(btn.getAttribute('data-item')); });
  });
  var prev = root.querySelector('#cal-prev'), next = root.querySelector('#cal-next');
  if(prev) prev.addEventListener('click', function(){ shiftCalendar(-1); });
  if(next) next.addEventListener('click', function(){ shiftCalendar(1); });
  var sb = root.querySelector('#settings-btn');
  if(sb) sb.addEventListener('click', openSettings);
  root.querySelectorAll('.tab-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      activeTab = btn.getAttribute('data-tab');
      paint();
      window.scrollTo(0,0);
    });
  });
}
function shiftCalendar(delta){
  calMonth += delta;
  if(calMonth<0){ calMonth=11; calYear--; }
  if(calMonth>11){ calMonth=0; calYear++; }
  paint();
}

function showToast(msg){
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(function(){ toastEl.classList.remove('show'); }, 2600);
}

/* ============ dialogs ============ */
function dlgShow(dlg){ if(typeof dlg.showModal==='function'){ dlg.showModal(); } else { dlg.setAttribute('open',''); } }
function dlgHide(dlg){ if(typeof dlg.close==='function'){ try{ dlg.close(); }catch(e){ dlg.removeAttribute('open'); } } else { dlg.removeAttribute('open'); } }

function itemOptionsHtml(){
  return GROUP_ORDER.map(function(g){
    var items = DATA.filter(function(d){ return d.group===g; });
    if(!items.length) return "";
    return '<optgroup label="'+esc(GROUP_LABEL[g])+'">'+
      items.map(function(d){ return '<option value="'+d.id+'">'+esc(d.name)+'</option>'; }).join("")+
    '</optgroup>';
  }).join("");
}

function buildDialogs(){
  dlgLog = document.createElement('dialog');
  dlgLog.innerHTML =
    '<div class="dlg-body">'+
      '<p class="dlg-title">清掃完了を記録</p>'+
      '<p class="dlg-sub" id="log-sub"></p>'+
      '<div class="field"><label>実施日</label><input type="date" id="log-date"></div>'+
      '<div class="field"><label>担当者</label><input type="text" id="log-person" placeholder="お名前"></div>'+
      '<div class="field"><label>メモ（任意）</label><textarea id="log-memo" placeholder="気づいた点や引き継ぎ事項があれば"></textarea></div>'+
      '<div class="dlg-actions">'+
        '<button class="btn" data-close="1" type="button">キャンセル</button>'+
        '<button class="btn partial" id="log-submit-partial" type="button">一部完了</button>'+
        '<button class="btn complete" id="log-submit-complete" type="button">完了</button>'+
      '</div>'+
    '</div>';
  document.body.appendChild(dlgLog);

  dlgEdit = document.createElement('dialog');
  dlgEdit.innerHTML =
    '<div class="dlg-body">'+
      '<p class="dlg-title">頻度・備考を編集</p>'+
      '<p class="dlg-sub" id="edit-sub"></p>'+
      '<div class="field"><label>表示用の頻度テキスト</label><input type="text" id="edit-freqtext"></div>'+
      '<div class="field"><label>自動判定ルール</label><select id="edit-ruletype">'+
        '<option value="oddMonth">奇数月に1回</option>'+
        '<option value="evenMonth">偶数月に1回</option>'+
        '<option value="everyNMonths">Nヶ月ごとに1回</option>'+
        '<option value="biweekly">2週間に1回</option>'+
        '<option value="monthlyWeek1">毎月第1週に1回</option>'+
        '<option value="annualMonths">年に数回（月指定）</option>'+
        '<option value="manual">随時（自動判定なし）</option>'+
      '</select></div>'+
      '<div class="field" id="edit-params-wrap"></div>'+
      '<div class="field"><label>備考</label><textarea id="edit-note"></textarea></div>'+
      '<div class="dlg-actions">'+
        '<button class="btn" data-close="1" type="button">キャンセル</button>'+
        '<button class="btn primary" id="edit-submit" type="button">保存する</button>'+
      '</div>'+
    '</div>';
  document.body.appendChild(dlgEdit);

  dlgSettings = document.createElement('dialog');
  dlgSettings.innerHTML =
    '<div class="dlg-body">'+
      '<p class="dlg-title">GitHub連携の設定</p>'+
      '<p class="dlg-sub">この端末のブラウザにのみ保存されます。清掃記録を保存できるトークンなので、他人と共有しないでください。</p>'+
      '<div class="field"><label>リポジトリ所有者（例: uematsutotonoi）</label><input type="text" id="set-owner"></div>'+
      '<div class="field"><label>リポジトリ名（例: totonoi-portal）</label><input type="text" id="set-repo"></div>'+
      '<div class="field"><label>ブランチ</label><input type="text" id="set-branch" value="main"></div>'+
      '<div class="field"><label>state.json のパス</label><input type="text" id="set-path" value="state.json"></div>'+
      '<div class="field"><label>Personal Access Token（Contents: Read and write）</label><input type="password" id="set-token"></div>'+
      '<div class="dlg-actions">'+
        '<button class="btn" data-close="1" type="button">閉じる</button>'+
        '<button class="btn primary" id="set-submit" type="button">保存する</button>'+
      '</div>'+
    '</div>';
  document.body.appendChild(dlgSettings);

  dlgDay = document.createElement('dialog');
  dlgDay.innerHTML =
    '<div class="dlg-body">'+
      '<p class="dlg-title" id="day-title"></p>'+
      '<div id="day-existing"></div>'+
      '<p class="dlg-sub" style="margin-top:4px">この日の記録を追加</p>'+
      '<div class="field"><label>清掃項目</label><select id="day-item">'+itemOptionsHtml()+'</select></div>'+
      '<div class="field"><label>担当者</label><input type="text" id="day-person" placeholder="お名前"></div>'+
      '<div class="field"><label>メモ（任意）</label><textarea id="day-memo"></textarea></div>'+
      '<div class="dlg-actions">'+
        '<button class="btn" data-close="1" type="button">閉じる</button>'+
        '<button class="btn partial" id="day-submit-partial" type="button">一部完了</button>'+
        '<button class="btn complete" id="day-submit-complete" type="button">完了</button>'+
      '</div>'+
    '</div>';
  document.body.appendChild(dlgDay);

  dlgHist = document.createElement('dialog');
  dlgHist.innerHTML =
    '<div class="dlg-body">'+
      '<p class="dlg-title" id="hist-title"></p>'+
      '<p class="dlg-sub" id="hist-sub"></p>'+
      '<div id="hist-list"></div>'+
      '<div class="dlg-actions">'+
        '<button class="btn" data-close="1" type="button">閉じる</button>'+
      '</div>'+
    '</div>';
  document.body.appendChild(dlgHist);

  [dlgLog, dlgEdit, dlgSettings, dlgDay, dlgHist].forEach(function(d){
    d.querySelectorAll('[data-close]').forEach(function(b){
      b.addEventListener('click', function(){ dlgHide(dlgLog); dlgHide(dlgEdit); dlgHide(dlgSettings); dlgHide(dlgDay); dlgHide(dlgHist); });
    });
  });
  dlgEdit.querySelector('#edit-ruletype').addEventListener('change', renderEditParams);
}

function renderEditParams(){
  var wrap = dlgEdit.querySelector('#edit-params-wrap');
  var t = dlgEdit.querySelector('#edit-ruletype').value;
  if(t==="everyNMonths"){
    wrap.innerHTML = '<label>間隔（ヶ月）</label><input type="number" min="1" max="24" id="edit-n" value="2">';
  } else if(t==="annualMonths"){
    wrap.innerHTML = '<label>実施月（カンマ区切り 例: 6,10）</label><input type="text" id="edit-months" value="6,10">';
  } else {
    wrap.innerHTML = "";
  }
}

var curLogId=null, curEditId=null;

function openLog(id){
  var item = mergedItem(id);
  curLogId = id;
  dlgLog.querySelector('#log-sub').textContent = item.name;
  dlgLog.querySelector('#log-date').value = ymd(todayDate());
  dlgLog.querySelector('#log-person').value = loadLastPerson();
  dlgLog.querySelector('#log-memo').value = "";
  dlgShow(dlgLog);
}
function openEdit(id){
  var item = mergedItem(id);
  curEditId = id;
  dlgEdit.querySelector('#edit-sub').textContent = item.name;
  dlgEdit.querySelector('#edit-freqtext').value = item.freqText;
  dlgEdit.querySelector('#edit-ruletype').value = item.ruleType;
  dlgEdit.querySelector('#edit-note').value = item.note || "";
  renderEditParams();
  if(item.ruleType==="everyNMonths" && item.ruleParams) dlgEdit.querySelector('#edit-n').value = item.ruleParams.n;
  if(item.ruleType==="annualMonths" && item.ruleParams) dlgEdit.querySelector('#edit-months').value = item.ruleParams.months.join(",");
  dlgShow(dlgEdit);
}
function openSettings(){
  var s = loadSettings() || {};
  dlgSettings.querySelector('#set-owner').value = s.owner || "";
  dlgSettings.querySelector('#set-repo').value = s.repo || "";
  dlgSettings.querySelector('#set-branch').value = s.branch || "main";
  dlgSettings.querySelector('#set-path').value = s.path || STATE_PATH;
  dlgSettings.querySelector('#set-token').value = s.token || "";
  dlgShow(dlgSettings);
}
function openDay(dateStr){
  curDayDate = dateStr;
  var d = parseISO(dateStr);
  dlgDay.querySelector('#day-title').textContent = (d.getMonth()+1)+"月"+d.getDate()+"日（"+WD[d.getDay()]+"）の清掃記録";
  dlgDay.querySelector('#day-person').value = loadLastPerson();
  dlgDay.querySelector('#day-memo').value = "";
  refreshDayList();
  dlgShow(dlgDay);
}
function refreshDayList(){
  var recs = (recordsByDate()[curDayDate] || []);
  var wrap = dlgDay.querySelector('#day-existing');
  if(!recs.length){
    wrap.innerHTML = '<p class="proc-empty">この日の記録はまだありません。</p>';
    return;
  }
  wrap.innerHTML = '<ul class="day-rec-list">'+recs.map(function(r){
    return '<li><b>'+esc(r.itemName)+'</b> '+completionTag(r.status)+'<span>担当: '+esc(r.person||"不明")+(r.memo?(' ・ '+esc(r.memo)):'')+'</span>'+
      '<button type="button" class="day-del" data-item="'+r.itemId+'" data-idx="'+r.histIndex+'">削除</button></li>';
  }).join("")+'</ul>';
  wrap.querySelectorAll('.day-del').forEach(function(btn){
    btn.addEventListener('click', function(){
      var itemId = btn.getAttribute('data-item');
      var idx = parseInt(btn.getAttribute('data-idx'),10);
      deleteRecord(itemId, idx);
    });
  });
}
function openItemHistory(id){
  var item = mergedItem(id);
  dlgHist.querySelector('#hist-title').textContent = item.name;
  dlgHist.querySelector('#hist-sub').textContent = ruleSummary(item);
  var wrap = dlgHist.querySelector('#hist-list');
  if(!item.history.length){
    wrap.innerHTML = '<p class="proc-empty">記録はまだありません。</p>';
  } else {
    var rows = item.history.slice().reverse().map(function(h){ return '<li>'+recordLine(h)+'</li>'; }).join("");
    wrap.innerHTML = '<ul class="hist-list">'+rows+'</ul>';
  }
  dlgShow(dlgHist);
}

function submitLog(status){
  if(!curLogId) return;
  var date = dlgLog.querySelector('#log-date').value;
  if(!date){ showToast('実施日を入力してください'); return; }
  var person = dlgLog.querySelector('#log-person').value.trim();
  if(!person){ showToast('担当者を入力してください'); return; }
  var memo = dlgLog.querySelector('#log-memo').value.trim();
  var id = curLogId;
  saveLastPerson(person);
  dlgHide(dlgLog);
  mutateAndSave(function(state){
    var s = state.items[id] || (state.items[id]={lastDone:null,history:[]});
    s.history = s.history || [];
    s.history.push({date:date, person:person, memo: memo || undefined, status: status});
    recomputeLastDone(s);
  }, "清掃完了記録（"+COMPLETION_LABEL[status]+"）: " + DATA_BY_ID[id].name + " (" + date + " " + person + ")");
}
function submitEdit(){
  if(!curEditId) return;
  var freqText = dlgEdit.querySelector('#edit-freqtext').value.trim();
  var ruleType = dlgEdit.querySelector('#edit-ruletype').value;
  var note = dlgEdit.querySelector('#edit-note').value.trim();
  var ruleParams = null;
  if(ruleType==="everyNMonths"){
    var n = parseInt(dlgEdit.querySelector('#edit-n').value,10) || 1;
    ruleParams = {n:n};
  } else if(ruleType==="annualMonths"){
    var months = dlgEdit.querySelector('#edit-months').value.split(",").map(function(x){return parseInt(x.trim(),10);}).filter(function(x){return x>=1 && x<=12;});
    if(!months.length) months=[1];
    ruleParams = {months:months};
  }
  var id = curEditId;
  dlgHide(dlgEdit);
  mutateAndSave(function(state){
    var s = state.items[id] || (state.items[id]={lastDone:null,history:[]});
    s.override = {freqText:freqText, ruleType:ruleType, ruleParams:ruleParams, note:note};
  }, "頻度・備考を編集: " + DATA_BY_ID[id].name);
}
function submitSettings(){
  var s = {
    owner: dlgSettings.querySelector('#set-owner').value.trim(),
    repo: dlgSettings.querySelector('#set-repo').value.trim(),
    branch: dlgSettings.querySelector('#set-branch').value.trim() || "main",
    path: dlgSettings.querySelector('#set-path').value.trim() || STATE_PATH,
    token: dlgSettings.querySelector('#set-token').value.trim()
  };
  if(!s.owner || !s.repo || !s.token){ showToast('所有者・リポジトリ名・トークンは必須です'); return; }
  saveSettings(s);
  dlgHide(dlgSettings);
  showToast('設定を保存しました');
  paint();
}
function submitDayAdd(status){
  var itemId = dlgDay.querySelector('#day-item').value;
  var person = dlgDay.querySelector('#day-person').value.trim();
  if(!person){ showToast('担当者を入力してください'); return; }
  var memo = dlgDay.querySelector('#day-memo').value.trim();
  var date = curDayDate;
  saveLastPerson(person);
  mutateAndSave(function(state){
    var s = state.items[itemId] || (state.items[itemId]={lastDone:null,history:[]});
    s.history = s.history || [];
    s.history.push({date:date, person:person, memo: memo || undefined, status: status});
    recomputeLastDone(s);
  }, "清掃完了記録（"+COMPLETION_LABEL[status]+"）: " + DATA_BY_ID[itemId].name + " (" + date + " " + person + ")", function(){
    dlgDay.querySelector('#day-memo').value = "";
  });
}
function deleteRecord(itemId, histIndex){
  mutateAndSave(function(state){
    var s = state.items[itemId];
    if(!s || !s.history) return;
    s.history.splice(histIndex, 1);
    recomputeLastDone(s);
  }, "記録を削除: " + DATA_BY_ID[itemId].name);
}

/* ============ polling ============ */
function startPolling(){
  setInterval(function(){
    fetchStateFromPages().then(function(remote){
      var remoteStr = JSON.stringify(remote);
      var localStr = JSON.stringify(STATE);
      if(remoteStr !== localStr){
        STATE = remote;
        lastSyncedAt = new Date();
        paint();
      }
    }).catch(function(){});
  }, POLL_MS);
}

/* ============ init ============ */
function init(){
  document.title = "TOTONOI清掃ポータル";
  root = document.getElementById('root');
  toastEl = document.getElementById('toast');
  var t0 = todayDate();
  calYear = t0.getFullYear();
  calMonth = t0.getMonth();

  buildDialogs();
  dlgLog.querySelector('#log-submit-partial').addEventListener('click', function(){ submitLog('partial'); });
  dlgLog.querySelector('#log-submit-complete').addEventListener('click', function(){ submitLog('complete'); });
  dlgEdit.querySelector('#edit-submit').addEventListener('click', submitEdit);
  dlgSettings.querySelector('#set-submit').addEventListener('click', submitSettings);
  dlgDay.querySelector('#day-submit-partial').addEventListener('click', function(){ submitDayAdd('partial'); });
  dlgDay.querySelector('#day-submit-complete').addEventListener('click', function(){ submitDayAdd('complete'); });

  root.innerHTML = '<div class="wrap"><p class="foot" style="margin-top:60px">読み込み中…</p></div>';

  fetchStateFromPages().then(function(remote){
    STATE = remote;
    lastSyncedAt = new Date();
  }).catch(function(){
    STATE = {items:{}};
    showToast('state.json の読み込みに失敗しました（空の状態で表示しています）');
  }).then(function(){
    paint();
    startPolling();
    if(!isConfigured()) openSettings();
  });
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
