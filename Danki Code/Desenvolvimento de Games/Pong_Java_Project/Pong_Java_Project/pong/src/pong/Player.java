package pong;

import java.awt.Color;
import java.awt.Graphics;

public class Player {
	
	boolean rigth, left;
	public int x, y;
	public int width, heigth;
	
	public Player(int x, int y) {
		this.x = x;
		this.y = y;
		this.width = 30;
		this.heigth = 5;
	}
	
	public void tick() {
		
		if(rigth) {
			x++;
		}else if(left) {
			x--;
		}
		
		//x+= (Game.ball.x - x - 6) * 0.07;
		
		if(x+width > Game.WIDTH) {
			x = Game.WIDTH - width;
		}else if(x < 0) {
			x = 0;
		}
	}
	
	public void render(Graphics g) {
		g.setColor(Color.white);
		g.fillRect(x, y, width, heigth);
	}
	
}
