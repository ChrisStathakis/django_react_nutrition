from django.urls import path
from .views import ProfileListApiView, ProfileCreateApiView, ProfileRetrieveUpdateDestroyAPiView, CurrentUserView

urlpatterns = [
    path('list/', ProfileListApiView.as_view(), name='profile_list'),
    path('create/', ProfileCreateApiView.as_view(), name='profile_create'),
    path('update/<int:pk>/', ProfileRetrieveUpdateDestroyAPiView.as_view(), name='profile_update'),

    path('current-user/', CurrentUserView.as_view(), name='current_user')

]
