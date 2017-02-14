angular.module('home', [])


.controller("homeController", function ($http) {
  this.testNgForm={};
  this.originalStudent = {
    firstName: 'James',
    lastName: 'Bond',
    DoB: new Date('01/31/1980'),
    gender: 'male',
    trainingType: 'online',
    maths: false,
    physics: true,
    chemistry: true
  };

  this.student = angular.copy(this.originalStudent);


  this.submitStudnetForm = function () {
    alert(this.testNgForm.firstName.$invalid);
    alert(this.testNgForm.firstName.$dirty);
    var onSuccess = function (data, status, headers, config) {
      alert('Student saved successfully.');
    };

    var onError = function (data, status, headers, config) {
      alert('Error occured.');
    }

    // $http.post('/home', {student: this.student})
    //         .success(onSuccess)
    //         .error(onError);

  };

  //6. create resetForm() function. This will be called on Reset button click.
  this.resetForm = function () {
    this.student = angular.copy(this.OriginalStudent);
  };
  this.disableSubmit=disableSubmitFn;
  function disableSubmitFn()
  {
return this.testNgForm.firstName.$invalid;
  }
});
