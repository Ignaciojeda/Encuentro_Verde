from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.contrib import messages

# Create your views here.


def index(request):
    context={}
    return render(request, 'Index.html', context)

@login_required
def Mis_reservas(request):
    return render(request, 'Mis_reservas.html')

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('Mis_reservas.html')
        else:
            messages.error(request, 'Usuario o contraseña incorrectos')
    return render(request, 'login.html')



def contacto(request):
    context={}
    return render(request, 'Contacto.html', context)

def pumalin(request):
    context={}
    return render(request, 'Pumalin.html', context)

def puyehue(request):
    context={}
    return render(request, 'Puyehue.html', context)

def vicentepr(request):
    context={}
    return render(request, 'VicentePR.html', context)

def registrar(request):
    context={}
    return render(request, 'Registrar.html', context)

def reserva(request):
    context={}
    return render(request, 'Reserva.html', context)


