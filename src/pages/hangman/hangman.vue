<template>
  <div id="hangman-page">
    <div class="container">
      <!-- Start Game  -->
      <div class="start-game" v-if="!gameStarted">
        <div class="lets-play">
          Hey, Let's play hangman.
        </div>
        <el-button
          class="button-play"
          @click="startGame"
          type="success"
          size="big"
          >Start Playing</el-button
        >
      </div>

      <!-- Game Container -->
      <el-row class="game-container" v-else>
        <!-- Left Side -->
        <el-col :xs="24" :sm="24" :md="10" class="left-side">
          <canvas ref="sketch" id="sketch" width="230" height="250"></canvas>
        </el-col>

        <!-- Right Side -->
        <el-col :xs="24" :sm="24" :md="14" class="right-side">
          <div class="game-running" v-if="hangman.gameEndStatus == null">
            <!-- Hint -->
            <el-alert
              class="hint"
              title="It's a country name."
              type="info"
              :closable="false"
              show-icon
            >
            </el-alert>

            <!-- Game Status -->
            <div class="game-status">
              <div
                class="character"
                :class="{ underscore: character == null }"
                v-for="(character, index) in hangman.gameStatus"
                :key="index"
              >
                <div v-if="character == null">&nbsp;</div>
                <div v-else>{{ character.toUpperCase() }}</div>
              </div>
            </div>

            <!-- Characters -->
            <div class="chars-container">
              <el-button
                circle
                :type="
                  hangman.wordsGuessed.indexOf(character) >= 0
                    ? 'danger'
                    : 'primary'
                "
                plain
                :disabled="hangman.wordsGuessed.indexOf(character) >= 0"
                @click="makeGuess(character)"
                class="character"
                v-for="(character, index) in characterList"
                :key="index"
              >
                {{ character.toUpperCase() }}
              </el-button>
            </div>

            <!-- Change Word Button -->
            <el-button class="button-play" type="danger" @click="quitGame">
              Quit Game
            </el-button>
          </div>

          <!-- Game ended -->
          <div class="game-ended" v-else>
            <!-- Winning Message -->
            <div class="message" v-if="hangman.gameEndStatus === true">
              Yup, It's {{ randomWord }}, <br />You Win.
            </div>
            <img src="/img/won.gif" v-if="hangman.gameEndStatus === true" />

            <!-- Game Over Message -->
            <div class="message" v-if="hangman.gameEndStatus === false">
              Game Over <br />
              Word was {{ randomWord }}.
            </div>
            <img src="/img/lost.gif" v-if="hangman.gameEndStatus === false" />

            <!-- Play Again Button -->
            <el-button class="button-play" type="success" @click="startGame">
              Play Again
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import HangmanComponent from "./hangmanComponent";
export default HangmanComponent;
</script>

<style scoped lang="scss" src="./hangman.scss"></style>
