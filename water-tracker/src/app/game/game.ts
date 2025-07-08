import { getNameUser } from './start-game-menu';

let score = 0;

function getScore() {
  return score;
}

function startGame(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!;

  const hero = {
    x: 50,
    y: 150,
    vy: 0,
    width: 35,
    height: 35,
    grounded: true,
    gravity: 1.5,
    jumpForce: -16,
    canJump: true,
  };

  const obstacles: {
    x: number;
    y: number;
    text: string;
    width: number;
    height: number;
    passed: boolean;
  }[] = [];

  const obstacleTexts = ['ОП', 'ТС', 'СБКТС', 'ОTТС', 'ОТШ', 'ЭПСМ', 'ЭПТС'];

  let gameOver = true;
  let animationId: number | null = null;
  let obstacleIntervalId: number | null = null;

  let obstacleSpeed = 4;
  const maxObstacleSpeed = 50;
  const speedIncrement = 0.001;

  let lastTimestamp = performance.now();

  function drawKPI() {
    ctx.fillStyle = '#000';
    ctx.font = '20px Arial';
    ctx.fillText('KPI', hero.x, hero.y + hero.height - 10);
  }

  function drawObstacles() {
    ctx.fillStyle = 'red';
    ctx.font = '18px Arial';
    for (const obs of obstacles) {
      ctx.fillText(obs.text, obs.x, obs.y + obs.height - 15);
    }
  }

  function drawScore() {
    ctx.fillStyle = 'black';
    ctx.font = '14px Courier New, monospace';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(`У сотрудника ${getNameUser()} yровень KPI: ${score}`, 15, 15);
  }

  function drawStart() {
    ctx.fillStyle = 'black';
    ctx.font = '14px Courier New, monospace';
    ctx.fillText(
      `Для старта жми SPACE`,
      canvas.width / 2 - 90,
      canvas.height / 2
    );
  }

  drawStart();

  function drawFinish() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'black';

    ctx.font = '14px Courier New, monospace';
    ctx.fillText(`Вы не справились с документом.`, centerX, centerY - 15);
    ctx.fillText(`Нажмите`, centerX - 110, centerY);

    ctx.font = 'bold 14px Courier New, monospace';
    ctx.fillText(`ENTER`, centerX - 50, centerY);

    ctx.font = '14px Courier New, monospace';
    ctx.fillText(`чтобы начать заново.`, centerX + 65, centerY);

    ctx.fillText(`Нажмите`, centerX - 70, centerY + 15);
    ctx.font = 'bold 14px Courier New, monospace';
    ctx.fillText(`ESC`, centerX - 20, centerY + 15);

    ctx.font = '14px Courier New, monospace';
    ctx.fillText(`чтобы выйти.`, centerX + 50, centerY + 15);
  }

  function checkCollision() {
    const padding = 5;
    for (const obs of obstacles) {
      const heroOnGround = hero.y >= 150;
      const collide =
        hero.x + hero.width > obs.x + padding &&
        hero.x < obs.x + obs.width - padding &&
        heroOnGround;

      if (collide) {
        gameOver = true;
        drawFinish();
        document.removeEventListener('keydown', onKeyDown);
        document.addEventListener('keydown', onKeyDownEnter);
        if (animationId) cancelAnimationFrame(animationId);
        if (obstacleIntervalId) clearTimeout(obstacleIntervalId);
        break;
      }
    }
  }

  function update(timestamp = performance.now()) {
    const delta = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawScore();

    if (obstacleSpeed < maxObstacleSpeed) {
      obstacleSpeed += speedIncrement * delta * 60;
    }

    if (!hero.grounded) {
      hero.vy += hero.gravity * delta * 60;
      hero.y += hero.vy * delta * 60;

      if (hero.y >= 150) {
        hero.y = 150;
        hero.vy = 0;
        if (!hero.grounded) {
          hero.grounded = true;
          setTimeout(() => {
            hero.canJump = true;
          }, 50);
        }
      }
    }

    for (const obs of obstacles) {
      obs.x -= obstacleSpeed * delta * 60;
    }

    for (let i = obstacles.length - 1; i >= 0; i--) {
      const obs = obstacles[i];

      if (!obs.passed && obs.x + obs.width < hero.x) {
        obs.passed = true;
        score = +(score + 0.01).toFixed(2);
      }

      if (obs.x + obs.width < 0) {
        obstacles.splice(i, 1);
      }
    }

    drawKPI();
    drawObstacles();
    checkCollision();

    if (!gameOver) {
      animationId = requestAnimationFrame(update);
    }
  }

  function spawnObstacleWithDelay() {
    if (gameOver) return;

    const text =
      obstacleTexts[Math.floor(Math.random() * obstacleTexts.length)];
    const width = ctx.measureText(text).width;

    obstacles.push({
      x: canvas.width,
      y: 150,
      text,
      width,
      height: 40,
      passed: false,
    });

    const baseDelay = 2000;
    const minDelay = 300;

    function getNextDelay(speed: number) {
      const delay = baseDelay - (speed - 4) * 450;
      return Math.max(delay, minDelay) + Math.random() * 600;
    }

    const nextDelay = getNextDelay(obstacleSpeed);
    obstacleIntervalId = window.setTimeout(spawnObstacleWithDelay, nextDelay);
  }

  function resetGame() {
    score = 0;
    hero.x = 50;
    hero.y = 150;
    hero.vy = 0;
    hero.grounded = true;
    hero.canJump = true;
    obstacles.length = 0;
    obstacleSpeed = 4;
    gameOver = false;
    lastTimestamp = performance.now();
    update();

    spawnObstacleWithDelay();
    document.removeEventListener('keydown', onKeyDownEnter);
  }

  if (!gameOver) {
    resetGame();
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      if (gameOver) {
        resetGame();
      } else if (hero.grounded && hero.canJump) {
        hero.vy = hero.jumpForce;
        hero.grounded = false;
        hero.canJump = false;
      }
    }
  };

  const onKeyDownEnter = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      if (gameOver) {
        document.addEventListener('keydown', onKeyDown);
        resetGame();
      } else if (hero.grounded && hero.canJump) {
        hero.vy = hero.jumpForce;
        hero.grounded = false;
        hero.canJump = false;
      }
    }
  };

  document.addEventListener('keydown', onKeyDown);
}

export { startGame, getScore };
