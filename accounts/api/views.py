from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from ..models import Profile
from .serializers import ProfileSerializer, UserSerializer
from .persmissions import OwnerOrNoData


class ProfileListApiView(ListAPIView):
    queryset = Profile.objects.filter(public=True)
    serializer_class = ProfileSerializer
    permission_classes = [AllowAny, ]
    filter_backends = [DjangoFilterBackend, ]
    filterset_fields = ['user', ]


class ProfileCreateApiView(CreateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [AllowAny, ]


class ProfileRetrieveUpdateDestroyAPiView(RetrieveUpdateDestroyAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [OwnerOrNoData, ]


class CurrentUserView(APIView):
    permission_classes = [IsAuthenticated, ]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)