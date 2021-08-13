clc % clear window
close all % close les figure 
clear % clear les variables

output=0;

rng(9)

nos = input('entrer N points : '); % Nombres des points de hasard
clc

xlow = input('entrer xlow  : '); % valeur min de l'intervale de l'integral 
xhigh = input('entrer xhigh  : '); % valeur max de l'intervale de l'integral
clc

ylow = input('entrer ylow  : '); % valeur min de l'intervale de l'integral cette pour l'axe de Y pour definir la boite d'integrale 
yhigh = input('entrer yhigh  : '); % valeur max de l'intervale de l'integral cette pour l'axe de Y
clc

f = @(x,y) -(x/2)-(y/4)+7;

X = [];
Y  = [];
Z  = [];

for i=1:nos
  y = ylow + (yhigh-(ylow))*rand();
  x = xlow + (xhigh-(xlow))*rand();
  output = output + f(x,y);
  X = [X,x];
  Y = [Y,y];
  Z = [Z,f(x,y)];
end

output = (xhigh-xlow)*(yhigh-ylow)*output/nos;

F = -(X./2)-(Y./4)+7;
ZT = [];
for i=1:nos
    T = min(Z) + (max(Z)-(min(Z)))*rand();
    ZT = [ZT,T];
end

K = ZT < F;
K = K.*ZT;

figure(1)
scatter3(X,Y,ZT,'b')
hold on
scatter3(X,Y,K,'r')
grid on 
