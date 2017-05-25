(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        this.rooms = Room.all;
        this.currentUser = $cookies.get('blocChatCurrentUser');


        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }

        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.currentMessages = Message.getByRoomId(this.currentRoom.$id);

        }

        this.sendMessage = function (newMessage) {
            Message.send(newMessage, this.currentRoom.$id, this.currentUser);

        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
