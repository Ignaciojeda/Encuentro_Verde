from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .models import Formulario,Genero

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
    if request.method != "POST":
        generos = Genero.objects.all()
        context = {'genero': generos}
        return render(request, 'Reserva.html', context)
    else:
        nombre = request.POST.get("nombreCliente")
        apellido = request.POST.get("apellidoCliente")
        numero = request.POST.get("numeroCliente")
        correo = request.POST.get("correoCliente")
        genero_id = request.POST.get("genero")
        ciudad = request.POST.get("ciudadCliente")

        objetoGenero = Genero.objects.filter(id_genero=genero_id).first()
        if objetoGenero:
            obj = Formulario.objects.create(
                nombre_cliente=nombre,
                apellido_cliente=apellido,
                numero_cliente=numero,
                correo_cliente=correo,
                id_genero=objetoGenero,
                ciudad_cliente=ciudad,
            )
            obj.save()
            context = {'mensaje': 'OK, datos guardados con éxito'}
        else:
            context = {'mensaje': 'Error, género no encontrado'}

        generos = Genero.objects.all()
        context['genero'] = generos
        return render(request, 'Reserva.html', context)

    