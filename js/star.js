angular.module("miapp",[])
.controller("conapp",function($scope,$http){
  $scope.post =[];
  $scope.newPost = {};
  $scope.addPost = function(){
    $http.post("http://www.torden565.esy.es/github/comentario.php",{
      nombre: $scope.newPost.nombre,
      email: $scope.newPost.email,
      telefono: $scope.newPost.telefono,
      asunto: $scope.newPost.asunto,
      comentario: $scope.newPost.comentario
    })
    .success(function(data,status,headers,config){
      console.log(data);
    })
    .error(function(error,status,headers,config){
      console.log(error);
    });
  }
});