<template>
<div>
 <section class="calendar">
 <h2 class="titulo-ano">2018</h2>
 <h2 class="titulo-mes">December</h2>
 <table>
  <thead>
   <tr>
    <th>Mon</th>
    <th>Tue</th>
    <th>Wed</th>
    <th>Thu</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
   </tr>
  </thead>
  <tbody @click="selectedCalendar">
   <tr>
    <td class="junho">25</td>
    <td class="junho">26</td>
    <td class="junho">27</td>
    <td class="junho">28</td>
    <td class="junho">29</td>
    <td class="junho">30</td>
    <td>1</td>
   </tr>
   <tr>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
   </tr>
   <tr>
    <td>9</td>
    <td>10</td>
    <td>11</td>
    <td>12</td>
    <td class="selected">13</td>
    <td>14</td>
    <td>15</td>
   </tr>
  <tr :class="active ? 'spaceUnder': 'none'">
      <td>Vita</td>
      <td><div class="endLine"></div></td>
      <td><div class="expireLine"></div></td>
   </tr>
  <tr :class="active ? 'spaceUnder': 'none'">
      <td>Apple</td>
            <td><div class="middleLine"></div></td>
      <td><div class="transitionLineYellowRed"></div></td>
      <td><div class="endLine"></div></td>
      <td><div class="expireLine"></div></td>
   </tr>
   <tr :class="active ? 'spaceUnder': 'none'">
      <td>Milk</td>
      <td><div class="startLine"></div></td>
      <td><div class="transitionLineGreenYellow"></div></td>
      <td><div class="middleLine"></div></td>
      <td><div class="transitionLineYellowRed"></div></td>
      <td><div class="endLine"></div></td>
      <td><div class="expireLine"></div></td>

   </tr>
   <tr :class="active ? 'spaceUnder': 'none'">
      <td>Egg</td>
      <td><div class="startLine"></div></td>
      <td><div class="startLine"></div></td>
      <td><div class="startLine"></div></td>
      <td><div class="transitionLineGreenYellow"></div></td>
      <td><div class="middleLine"></div></td>
      <td><div class="middleLineException"></div></td>
   </tr>
   <tr :class="active ? 'spaceUnder': 'none'">
      <td>Spam</td>
            <td><div class="startLine"></div></td>
      <td><div class="startLine"></div></td>
      <td><div class="startLine"></div></td>
            <td><div class="startLine"></div></td>
      <td><div class="startLine"></div></td>
      <td><div class="startLineException"></div></td>

      <!-- <td><div class="transitionLineGreenYellow"></div></td>
      <td><div class="middleLine"></div></td>
      <td><div class="middleLineException"></div></td> -->
   </tr>
   <tr>
    <td>16</td>
    <td>17</td>
    <td>18</td>
    <td>19</td>
    <td>20</td>
    <td>21</td>
    <td>22</td>
   </tr>
   <tr>
    <td>23</td>
    <td>24</td>
    <td>25</td>
    <td>26</td>
    <td>27</td>
    <td>28</td>
    <td>29</td>
   </tr>
   <tr>
    <td>30</td>
    <td>31</td>
    <td class="agosto">1</td>
    <td class="agosto">2</td>
    <td class="agosto">3</td>
    <td class="agosto">4</td>
    <td class="agosto">5</td>
   </tr>

  </tbody>
 </table>

</section> 
</div>

</template>

<script>
  export default {
    name: 'your-component',
    data() {
      return {
        showDate: new Date(),
        highlight: {
              to: new Date(2018, 6, 20),                    // Highlight all dates up to specific date
              from: new Date(2018, 6, 26),                // Highlight all dates after specific date
              days: [6, 0]                                // Highlight Saturday's and Sunday'
        },
        active: true
      }
    },
    methods: {
      dayClicked(event) {
        console.log("clicked")
        console.log(event)
      },
      showAll(events) {
        // Do something...
      },
      eventClicked(event) {
        // Do something...
      },
      monthChanged(start, end) {
        // Do something...
      },
      selectedCalendar() {
        this.active = true
        console.log("clicked")
      }
    },
    created() {
      // this.$calendar.eventBus.$on('show-all', events => showAll(events));
      // this.$calendar.eventBus.$on('day-clicked', day =>  dayClicked(day));
      // this.$calendar.eventBus.$on('event-clicked', event => eventClicked(event));
      // this.$calendar.eventBus.$on('month-changed', (start, end) => monthChanged(start, end));
    }
  }
</script>
<style>

.none {
  display: none;
  transition: margin-bottom 3000ms;
}

.startLine {
  height: 30px;
  background-color: #A9E5BB;
  width: 105%;
}

.startLineException {
  height: 30px;
  background-color: #A9E5BB;
  width: 80%;
}

.endLineException {
  height: 30px;
  background-color: #ED6A5A;
  width: 80%;
}

.transitionLineGreenYellow {
  height: 30px;
  background: linear-gradient(to right, #A9E5BB , #FFEF66);
  width: 105%;
}

.transitionLineYellowRed {
  height: 30px;
  background: linear-gradient(to right, #FFEF66, #ED6A5A);
  width: 105%;
}

.middleLine {
  height: 30px;
  background-color: #FFEF66;
  width: 105%;
}
.middleLineException {
  height: 30px;
  background-color: #FFEF66;
  width: 80%;
}

.endLine {
    height: 30px;
    background-color: #ED6A5A;
    width: 105%;
}

.expireLine {
  height: 30px;
  background: linear-gradient(to right, #ED6A5A, #333,#333);
  width: 80%;
  border-radius: 0 100px 100px 0;
}

.spaceUnder {
  margin-bottom: 20vh;
transition: margin-bottom 3000ms;
}
table {
	margin-top: 1.875em;
	font-size: 0.9em;
  width: 93vw;
}

tr {
  height: 85px;
}

thead {
	border: none;
}

th, td {
	color: #3d3f3f;
	text-align: center;
}

.calendar {
	background: #fafafa;
	border: 1px solid #ebebeb;
	padding: .8em;
	/* margin: .6em auto; */
	/* width: 25em; */
}

.junho, .agosto {
	color: #d6d7d6;
}

.titulo-mes, .titulo-ano {
	font-size: 1.8em;
	margin: 0.5em;
}

.titulo-mes {
	color: #7dd1c6;
  display: flex;
}

.titulo-ano {
	color: #535858;
	float: right;
}

.selected {
	color: #fff;
	background-color: #7dd1c6;
	border-radius: 50%;
}

p {
	color: #3d3f3f;
	font-weight: bold;
	text-align: center;
}

#made-by a {
	color: #0a0707;
	text-decoration: none;
}

.fa {
	color: #e90606;
	margin: 0 3px;
	font-size: 10px;
	animation: pound .35s infinite alternate;
	-webkit-animation: pound .35s infinite alternate;
}

@-webkit-keyframes pound {
	to {
		transform: scale(1.1);
	}
}


</style>
