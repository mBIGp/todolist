// 할 일 추가 함수
function addTask() {
  // 입력창에서 텍스트 가져오기
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim(); // 공백 제거

  // 입력값이 비어있으면 추가하지 않음
  if (taskText === "") {
    alert("할 일을 입력하세요!");
    return;
  }

  // 새로운 리스트 아이템 생성
  let li = document.createElement("li");
  li.textContent = taskText;

  // 삭제 버튼 추가
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.onclick = function () {
    li.remove(); // 해당 리스트 아이템 삭제
  };

  // 리스트 아이템에 삭제 버튼 추가
  li.appendChild(deleteBtn);

  // 리스트에 추가
  document.getElementById("taskList").appendChild(li);

  // 입력창 초기화
  taskInput.value = "";
}
