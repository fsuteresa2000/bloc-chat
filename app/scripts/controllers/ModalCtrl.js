(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        this.cancel = function () {
            $uibModalInstance.dismiss();
        };

        this.submit = function () {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };
        this.createUsername = function(username) {
            $cookies.put('blocChatCurrentUser', username);
            $uibModalInstance.close();
        };
      }



    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
