
var m0 = new Array(1)

m0[0] = new Array(52,36,10,18,51,35,11,27,57,42,27,36,42,36,2,29,36,46,29,22,55,39,15,23,61,34,12,20,62,52,5,19,58,37,6,21,59,51,19,37,52,37,22,15,60,58,120,59,4,6,71,5,63,47,9,25,34,43,15,43,51,43,8,24,46,31,21,31,37,31,14,22,47,46,22,30,39,30,23,30,53,37,13,21,43,22,6,7,22,14);
m0[0].base = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,22,23,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,0);
m0[0].root =0;
m0[0].move =0;
var n0 = new Array();
var b0 = -1;
var pieces = "KQNBR ";
var pos_after = "Position after ";
var start_pos = "Start position ";
function g0(a,b)
{	gm(m0,n0,0,b0,'lllg0.htm',a,b);}
function MB_50()
{b0=MB_5(m0,n0,0,b0,'lllg0.htm'); GMS(m0,n0,0,b0,'lllg0.htm');}
function MB0()
{b0=MB(m0,n0,0,b0,'lllg0.htm'); GMS(m0,n0,0,b0,'lllg0.htm');}
function MF_50()
{b0=MF_5(m0,n0,0,b0,'lllg0.htm'); GMS(m0,n0,0,b0,'lllg0.htm');}
function MF0(bVarWin)
{b0=MF(m0,n0,0,b0,'lllg0.htm',bVarWin); GMS(m0,n0,0,b0,'lllg0.htm');}
var nMoves = new Array(0,0);
var nLevels = new Array(0,0);
var nNameCount = new Array(0,0);
var nOld = new Array(-1,-1);
baseName = 'lll';
var EmptyWhitePath = "gif/w.gif";
var EmptyBlackPath = "gif/b.gif";
var gifPath  = 'gif/';
var BackColor = "#FEFDF0";
var leftWindow		= this;
var rightWindow		= this;
var bFrames = 0;
var leftDocument		= leftWindow.document;
var rightDocument	= rightWindow.document;
