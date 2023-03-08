document.addEventListener('DOMContentLoaded', function () {

	//Open and close calendar
	let i = false,
		calendar = document.getElementById("cal-container"),
    buttonCalendar = document.getElementById('button_calendar'),
    modal = document.querySelector(`#modal`);

	modal.addEventListener('click', function (event) {
    let target = event.target;
		if (i && (target.closest(`#button_calendar`) || !target.closest(`.cal-container`))) {
      calendar.classList.remove(`cal-container-show`);
			i = false;
		} else if ( !i && target.closest(`#button_calendar`)) {
			calendar.classList.add(`cal-container-show`);
			i = true;
		}
  });
	//////

	//Writes a month and year on the calendar
	const thisDay = new Date().getDate();
	let	thisMonth = new Date().getMonth(),
		thisYear = new Date().getFullYear();

	function printDate() {
		const monthName = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
		document.getElementById("text").innerHTML = monthName[thisMonth] + " " + thisYear;
	}

	printDate();
	//////

	//writes the days on the calendar
	const cellsCalendar = document.getElementsByTagName("td"),
		arrayWithDate = [],
		numCellsThisMonth = [],
		numCellsPrevMonth = [],
		numCellsNextMonth = [];
	let dayWeekStartMonth;


	function printDatesCalendar() {

		const daysInMonth = 32 - new Date(thisYear, thisMonth, 32).getDate(), //How much days in this month?
			daysInMonthPrev = 32 - new Date(thisYear, thisMonth - 1, 32).getDate();

		dayWeekStartMonth = new Date(thisYear, thisMonth, 0).getDay();
		if (dayWeekStartMonth === 0) {
			dayWeekStartMonth += 7;
		}
		//count days previos month
		for (let i = 0; i < dayWeekStartMonth; i++) {
			numCellsPrevMonth[i] = i;
			arrayWithDate[numCellsPrevMonth[i]] = daysInMonthPrev - dayWeekStartMonth + 1 + i;
		}
		//count days this month
		for (let i = 0; i < daysInMonth; i++) {
			numCellsThisMonth[i] = dayWeekStartMonth + i;
			arrayWithDate[numCellsThisMonth[i]] = 1 + i;
		}
		//count days next month
		for (let i = 0; i <= 41 - dayWeekStartMonth - daysInMonth; i++) {
			numCellsNextMonth[i] = dayWeekStartMonth + daysInMonth + i;
			arrayWithDate[numCellsNextMonth[i]] = 1 + i;
		}
		//print date in calendar
		for (let i = 0; i <= 41; i++) {
			cellsCalendar[i].innerHTML = arrayWithDate[i];
		}
	}

	printDatesCalendar();
	//////

	//Choose day
	const chooseDate = {};

	function choose() {
		chooseDate.cell = thisDay + dayWeekStartMonth - 1;
		for (let i = 0; i <= 41; i++) {
			const td = document.getElementsByTagName("td")[i],
			choseDate = document.getElementById("enterDate");
			let dt = new Date();
			let nameMonth;
			let month = dt.getMonth() + 1;
			if (month < 10) month = '0' + month;
			if (month === '01') nameMonth = 'января';
			if (month === '02') nameMonth = 'февраля';
			if (month === '03') nameMonth = 'марта';
			if (month === '04') nameMonth = 'апреля';
			if (month === '05') nameMonth = 'мая';
			if (month === '06') nameMonth = 'июня';
			if (month === '07') nameMonth = 'июля';
			if (month === '08') nameMonth = 'августа';
			if (month === '09') nameMonth = 'сентября';
			if (month === '10') nameMonth = 'октября';
			if (month === '11') nameMonth = 'ноября';
			if (month === '12') nameMonth = 'декабря';
			let day = dt.getDate();
			if (day < 10) day = '0' + day;
			let year = dt.getFullYear();
			choseDate.value = day + ' ' + nameMonth + ' ' + year + ' ' + '(сегодня)';
      td.indexNumber = i;
      td.style.cursor = 'pointer';
      td.addEventListener('click', function () {
				if (thisYear < new Date().getFullYear()) {
					return;
				} else if (thisYear === new Date().getFullYear()) {
					if (thisMonth < new Date().getMonth()) {
						return;
					} else if (thisMonth === new Date().getMonth()) {
						if (arrayWithDate[this.indexNumber] < new Date().getDate()) {
							return;
						}
					}
				}
				if (this.indexNumber < dayWeekStartMonth) {
					return;
				} else if (this.indexNumber >= dayWeekStartMonth + 32 - new Date(thisYear, thisMonth, 32).getDate()) {
					return;
				}
				if (arrayWithDate[this.indexNumber] < 10) {
					a = "0";
				} else {
					a = "";
				}
				let chooseMonth;
				if ([thisMonth] == '0') chooseMonth = 'января';
				if ([thisMonth] == '1') chooseMonth = 'февраля';
				if ([thisMonth] == '2') chooseMonth = 'марта';
				if ([thisMonth] == '3') chooseMonth = 'апреля';
				if ([thisMonth] == '4') chooseMonth = 'мая';
				if ([thisMonth] == '5') chooseMonth = 'июня';
				if ([thisMonth] == '6') chooseMonth = 'июля';
				if ([thisMonth] == '7') chooseMonth = 'августа';
				if ([thisMonth] == '8') chooseMonth = 'сентября';
				if ([thisMonth] == '9') chooseMonth = 'октября';
				if ([thisMonth] == '10') chooseMonth = 'ноября';
				if ([thisMonth] == '11') chooseMonth = 'декабря';
				choseDate.value = a + arrayWithDate[this.indexNumber] + ' ' + chooseMonth + ' ' + thisYear;

				chooseDate.cell = this.indexNumber;
				chooseDate.month = thisMonth;
				chooseDate.year = thisYear;
				styleCalendar();
				cellsCalendar[chooseDate.cell].className = "choose";


			});
		}

	}

	choose();


	//////

	//Style for cells calendar
	function styleCalendar() {
		for (let i = 0; i < numCellsPrevMonth.length; i++) {
			cellsCalendar[numCellsPrevMonth[i]].className = "npMonth";
		}
		for (let i = 0; i < numCellsThisMonth.length; i++) {
			//for week end
			if (new Date(thisYear, thisMonth, i).getDay() === 5 || new Date(thisYear, thisMonth, i).getDay() === 6) {
				cellsCalendar[numCellsThisMonth[i]].className = "weekEnd";
			}
			//for week days
			else {
				cellsCalendar[numCellsThisMonth[i]].className = "weekDays";
			}
			//for today
			if (thisYear === new Date().getFullYear() && thisMonth === new Date().getMonth() && numCellsThisMonth[i] === thisDay + dayWeekStartMonth - 1) {
				cellsCalendar[numCellsThisMonth[i]].className = "today";
			}
		}
		for (let i = 0; i < numCellsNextMonth.length; i++) {
			cellsCalendar[numCellsNextMonth[i]].className = "npMonth";
		}
		if (chooseDate.month === thisMonth && chooseDate.year === thisYear) {
			cellsCalendar[chooseDate.cell].className = "choose";
		}

	}

	styleCalendar();

	//////

	//let b_left = document.getElementById("b_left"),
	//	b_right = document.getElementById("b_right");?????????????
	//click on right button
  const bLeft = document.getElementById('b_left');
  const bRight = document.getElementById('b_right');

  bLeft.addEventListener('click', function () {
		thisMonth--;
		if (thisMonth < 0) {
			thisMonth = 11;
			thisYear--;
		}
		printCalendar();
	});
	//click on right button
  bRight.addEventListener('click', function () {
		thisMonth++;
		if (thisMonth > 11) {
			thisMonth = 0;
			thisYear++;
		}
		printCalendar();
	});
	//////

	const printCalendar = function () {
		numCellsPrevMonth.length = 0;
		numCellsThisMonth.length = 0;
		numCellsNextMonth.length = 0;
		printDate();
		printDatesCalendar();
		styleCalendar();
	};
});
