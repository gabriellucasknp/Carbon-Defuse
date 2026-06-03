import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingHorizontal: 35,
    paddingBottom: 55,
    backgroundColor: "#F8FAFC",
    fontSize: 11,
    color: "#1E293B",
  },

  header: {
    marginBottom: 22,
    borderBottom: "2 solid #E5E7EB",
    paddingBottom: 14,
  },

  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "#0F172A",
  },

  subtitle: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 5,
  },

  section: {
    marginBottom: 22,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#0F172A",
    marginBottom: 12,
  },

  cardsGrid: {
    flexDirection: "row",
    gap: 10,
  },

  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    border: "1 solid #E2E8F0",
  },

  cardLabel: {
    fontSize: 10,
    color: "#64748B",
  },

  cardValue: {
    fontSize: 22,
    fontWeight: 700,
    marginTop: 8,
    color: "#0F172A",
  },

  cardInfo: {
    marginTop: 6,
    fontSize: 10,
    color: "#16A34A",
  },

  summaryBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    border: "1 solid #E2E8F0",
    padding: 18,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1 solid #F1F5F9",
    paddingVertical: 9,
  },

  rowLabel: {
    color: "#64748B",
  },

  rowValue: {
    fontWeight: 700,
  },

  chartBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18,
    border: "1 solid #E2E8F0",
  },

  chartContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 20,
    height: 120,
  },

  barColumn: {
    width: 20,
    alignItems: "center",
  },

  bar: {
    width: 18,
    backgroundColor: "#16A34A",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  month: {
    fontSize: 8,
    marginTop: 6,
    color: "#64748B",
  },

  distributionGrid: {
    flexDirection: "row",
    gap: 10,
  },

  distributionCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    border: "1 solid #E2E8F0",
    padding: 16,
    alignItems: "center",
  },

  distributionValue: {
    fontSize: 22,
    fontWeight: 700,
    color: "#16A34A",
  },

  distributionLabel: {
    marginTop: 6,
    fontSize: 10,
    color: "#64748B",
  },

  esgBox: {
    backgroundColor: "#00A63E",
    borderRadius: 18,
    padding: 22,
    marginTop: 10,
  },

  esgTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 8,
  },

  esgText: {
    color: "#DCFCE7",
    lineHeight: 1.5,
    fontSize: 10,
  },

  footer: {
    position: "absolute",
    bottom: 18,
    left: 35,
    right: 35,
    textAlign: "center",
    fontSize: 9,
    color: "#94A3B8",
  },
});

interface Props {
  data: any;
}

export function CorporativoReport({
  data,
}: Props) {
  const maxValue = Math.max(
    ...data.evolucaoMensal.map(
      (item: any) => item.valor
    ),
    1
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>
            Relatório Corporativo ESG
          </Text>

          <Text style={styles.subtitle}>
            Indicadores ambientais e desempenho
            operacional da frota
          </Text>
        </View>

        {/* CARDS */}
        <View style={styles.section}>
          <View style={styles.cardsGrid}>
            <View style={styles.card}>
              <Text style={styles.cardLabel}>
                Veículos Monitorados
              </Text>

              <Text style={styles.cardValue}>
                {data.totalVeiculos}
              </Text>

              <Text style={styles.cardInfo}>
                Frota ativa
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardLabel}>
                Emissões CO₂
              </Text>

              <Text style={styles.cardValue}>
                {data.totalCo2.toFixed(1)} kg
              </Text>

              <Text style={styles.cardInfo}>
                Indicador ESG
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardLabel}>
                Combustível
              </Text>

              <Text style={styles.cardValue}>
                {data.totalCombustivel.toFixed(
                  1
                )} L
              </Text>

              <Text style={styles.cardInfo}>
                Consumo total
              </Text>
            </View>
          </View>
        </View>

        {/* RESUMO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Resumo Executivo
          </Text>

          <View style={styles.summaryBox}>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>
                Simulações realizadas
              </Text>

              <Text style={styles.rowValue}>
                {data.passagens}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.rowLabel}>
                Distância percorrida
              </Text>

              <Text style={styles.rowValue}>
                {data.totalDistancia.toFixed(
                  0
                )} km
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.rowLabel}>
                Tempo total
              </Text>

              <Text style={styles.rowValue}>
                {(data.totalTempo / 60).toFixed(
                  1
                )} h
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.rowLabel}>
                Economia financeira
              </Text>

              <Text style={styles.rowValue}>
                R${" "}
                {data.economiaFinanceira.toFixed(
                  2
                )}
              </Text>
            </View>
          </View>
        </View>

        {/* EVOLUÇÃO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Evolução Mensal de CO₂
          </Text>

          <View style={styles.chartBox}>
            <View style={styles.chartContainer}>
              {data.evolucaoMensal.map(
                (item: any, index: number) => {
                  const height =
                    (item.valor / maxValue) *
                    90;

                  return (
                    <View
                      key={index}
                      style={styles.barColumn}
                    >
                      <View
                        style={[
                          styles.bar,
                          {
                            height:
                              height || 4,
                          },
                        ]}
                      />

                      <Text
                        style={styles.month}
                      >
                        {item.mes}
                      </Text>
                    </View>
                  );
                }
              )}
            </View>
          </View>
        </View>

        {/* DISTRIBUIÇÃO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Distribuição da Frota
          </Text>

          <View
            style={styles.distributionGrid}
          >
            <View
              style={
                styles.distributionCard
              }
            >
              <Text
                style={
                  styles.distributionValue
                }
              >
                {
                  data.distribuicao.sedan
                }
              </Text>

              <Text
                style={
                  styles.distributionLabel
                }
              >
                Sedan
              </Text>
            </View>

            <View
              style={
                styles.distributionCard
              }
            >
              <Text
                style={
                  styles.distributionValue
                }
              >
                {data.distribuicao.suv}
              </Text>

              <Text
                style={
                  styles.distributionLabel
                }
              >
                SUV
              </Text>
            </View>

            <View
              style={
                styles.distributionCard
              }
            >
              <Text
                style={
                  styles.distributionValue
                }
              >
                {
                  data.distribuicao
                    .pickup
                }
              </Text>

              <Text
                style={
                  styles.distributionLabel
                }
              >
                Pickup
              </Text>
            </View>
          </View>
        </View>

        {/* ESG */}
        <View style={styles.esgBox}>
          <Text style={styles.esgTitle}>
            Impacto ESG
          </Text>

          <Text style={styles.esgText}>
            Sua frota apresenta indicadores
            positivos de sustentabilidade,
            redução operacional e eficiência
            energética baseada nos dados das
            simulações corporativas.
          </Text>
        </View>

        <Text style={styles.footer}>
          Relatório gerado automaticamente •
          Corporativo ESG
        </Text>
      </Page>
    </Document>
  );
}