class PrimeNumbersGenerator {
  constructor() {
    this.maxNumber = 1000;
    this.rowsPerPage = 50;
    this.columnsPerPage = 4;
    this.maxOrder = 30;
    this.primesList = Array(this.maxNumber + 1).fill(0);
    this.multipliersList = Array(this.maxOrder + 1).fill(0);
    this.currentPage = 0;
    this.currentOffset = 0;
  }

  static main() {
    const primeGenerator = new PrimeNumbersGenerator();
    primeGenerator.generatePrimes();
    primeGenerator.printPrimes();
  }

  isNumberPrime(candidate, order) {
    let isPrime = true;
    let index = 2;
    while (index < order && isPrime) {
      while (this.multipliersList[index] < candidate) {
        this.multipliersList[index] +=
          this.primesList[index] + this.primesList[index];
      }
      if (this.multipliersList[index] === candidate) {
        isPrime = false;
      }
      index++;
    }
    return isPrime;
  }

  generatePrimes() {
    let candidate = 1;
    let primeIndex = 1;
    this.primesList[1] = 2;
    let order = 2;
    let square = 9;
    while (primeIndex < this.maxNumber) {
      do {
        candidate += 2;
        if (candidate === square) {
          order++;
          square = this.primesList[order] * this.primesList[order];
          this.multipliersList[order - 1] = candidate;
        }
      } while (!this.isNumberPrime(candidate, order));
      primeIndex++;
      this.primesList[primeIndex] = candidate;
    }
  }

  printPrimes() {
    this.currentPage = 1;
    this.currentOffset = 1;
    while (this.currentOffset <= this.maxNumber) {
      console.log("Page ", this.currentPage);
      for (
        let rowOffset = this.currentOffset;
        rowOffset <= this.currentOffset + this.rowsPerPage - 1;
        rowOffset++
      ) {
        let primesRow = [];
        for (let column = 0; column < this.columnsPerPage; column++) {
          if (rowOffset + column * this.rowsPerPage <= this.maxNumber) {
            primesRow.push(
              this.primesList[rowOffset + column * this.rowsPerPage]
            );
          }
        }
        console.log(primesRow.join("|"));
      }
      this.currentPage++;
      this.currentOffset += this.rowsPerPage * this.columnsPerPage;
    }
  }
}

PrimeNumbersGenerator.main();
