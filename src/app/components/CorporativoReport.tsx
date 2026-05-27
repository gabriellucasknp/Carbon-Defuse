import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
  } from "@react-pdf/renderer";
  
  const styles = StyleSheet.create({
    page: {
      padding: 35,
      backgroundColor: "#ffffff",
      fontSize: 12,
    },
  
    header: {
      marginBottom: 25,
      borderBottom: "1 solid #E5E7EB",
      paddingBottom: 15,
    },
  
    title: {
      fontSize: 24,
      fontWeight: 700,
      color: "#101828",
    },
  
    subtitle: {
      fontSize: 11,
      color: "#667085",
      marginTop: 4,
    },
  
    section: {
      marginBottom: 25,
    },
  
    cardsGrid: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
    },
  
    card: {
      flex: 1,
      borderRadius: 12,
      padding: 16,
      backgroundColor: "#F8FAFC",
      border: "1 solid #E5E7EB",
    },
  
    cardTitle: {
      fontSize: 10,
      color: "#667085",
    },
  
    cardValue: {
      marginTop: 6,
      fontSize: 24,
      fontWeight: 700,
      color: "#101828",
    },
  
    cardDescription: {
      marginTop: 5,
      fontSize: 10,
      color: "#00A63E",
    },
  
    sectionTitle: {
      fontSize: 16,
      fontWeight: 700,
      marginBottom: 15,
      color: "#101828",
    },
  
    chartContainer: {
      height: 180,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginTop: 15,
    },
  
    barItem: {
      width: "28%",
      alignItems: "center",
    },
  
    bar: {
      width: 45,
      backgroundColor: "#00A63E",
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
  
    barLabel: {
      marginTop: 8,
      fontSize: 10,
      color: "#667085",
    },
  
    barValue: {
      marginBottom: 5,
      fontSize: 10,
      fontWeight: 700,
      color: "#00A63E",
    },
  
    metricsGrid: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
    },
  
    metricCard: {
      flex: 1,
      borderRadius: 10,
      padding: 16,
      backgroundColor: "#F8FAFC",
      border: "1 solid #E5E7EB",
    },
  
    metricTitle: {
      fontSize: 11,
      color: "#667085",
    },
  
    metricValue: {
      marginTop: 8,
      fontSize: 22,
      fontWeight: 700,
      color: "#101828",
    },
  
    distributionContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 12,
    },
  
    distributionCard: {
      flex: 1,
      borderRadius: 10,
      padding: 14,
      textAlign: "center",
      backgroundColor: "#F8FAFC",
    },
  
    distributionNumber: {
      fontSize: 22,
      fontWeight: 700,
    },
  
    distributionText: {
      fontSize: 11,
      color: "#667085",
      marginTop: 4,
    },
  
    esgBox: {
      backgroundColor: "#00A63E",
      borderRadius: 16,
      padding: 22,
      marginTop: 20,
    },
  
    esgTitle: {
      color: "white",
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 10,
    },
  
    esgDescription: {
      color: "#DCFCE7",
      fontSize: 11,
      lineHeight: 1.5,
    },
  
    esgGrid: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
      marginTop: 18,
    },
  
    esgCard: {
      flex: 1,
      backgroundColor: "rgba(255,255,255,0.15)",
      borderRadius: 10,
      padding: 14,
      textAlign: "center",
    },
  
    esgValue: {
      color: "white",
      fontSize: 20,
      fontWeight: 700,
    },
  
    esgLabel: {
      color: "#DCFCE7",
      fontSize: 10,
      marginTop: 4,
    },
  });
  
  interface Props {
    data: any;
  }
  
  export function CorporativoReport({
    data,
  }: Props) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.title}>
              Relatório Corporativo
            </Text>
  
            <Text style={styles.subtitle}>
              Indicadores ESG e métricas
              ambientais da frota
            </Text>
          </View>
  
          {/* CARDS */}
          <View style={styles.section}>
            <View style={styles.cardsGrid}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>
                  Total de Veículos
                </Text>
  
                <Text style={styles.cardValue}>
                  {data.totalVeiculos}
                </Text>
  
                <Text
                  style={styles.cardDescription}
                >
                  Frota ativa
                </Text>
              </View>
  
              <View style={styles.card}>
                <Text style={styles.cardTitle}>
                  CO₂ evitado no mês
                </Text>
  
                <Text style={styles.cardValue}>
                  {data.co2}
                </Text>
  
                <Text
                  style={styles.cardDescription}
                >
                  ↑ 15% vs mês anterior
                </Text>
              </View>
  
              <View style={styles.card}>
                <Text style={styles.cardTitle}>
                  Combustível economizado
                </Text>
  
                <Text style={styles.cardValue}>
                  {data.combustivel}
                </Text>
  
                <Text
                  style={styles.cardDescription}
                >
                  Economia total
                </Text>
              </View>
            </View>
          </View>
  
          {/* EVOLUÇÃO */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Evolução Mensal da Frota
            </Text>
  
            <View style={styles.chartContainer}>
              {data.evolucaoMensal.map(
                (
                  item: any,
                  index: number
                ) => (
                  <View
                    key={index}
                    style={styles.barItem}
                  >
                    <Text
                      style={styles.barValue}
                    >
                      {item.valor} kg
                    </Text>
  
                    <View
                      style={[
                        styles.bar,
                        {
                          height:
                            item.valor * 3,
                        },
                      ]}
                    />
  
                    <Text
                      style={styles.barLabel}
                    >
                      {item.mes}
                    </Text>
                  </View>
                )
              )}
            </View>
          </View>
  
          {/* DISTRIBUIÇÃO */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Distribuição de Veículos
            </Text>
  
            <View
              style={
                styles.distributionContainer
              }
            >
              <View
                style={
                  styles.distributionCard
                }
              >
                <Text
                  style={
                    styles.distributionNumber
                  }
                >
                  {data.distribuicao.sedan}
                </Text>
  
                <Text
                  style={
                    styles.distributionText
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
                    styles.distributionNumber
                  }
                >
                  {data.distribuicao.suv}
                </Text>
  
                <Text
                  style={
                    styles.distributionText
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
                    styles.distributionNumber
                  }
                >
                  {data.distribuicao.pickup}
                </Text>
  
                <Text
                  style={
                    styles.distributionText
                  }
                >
                  Pickup
                </Text>
              </View>
            </View>
          </View>
  
          {/* MÉTRICAS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Métricas Adicionais
            </Text>
  
            <View style={styles.metricsGrid}>
              <View style={styles.metricCard}>
                <Text
                  style={styles.metricTitle}
                >
                  Tempo total reduzido
                </Text>
  
                <Text
                  style={styles.metricValue}
                >
                  {
                    data.tempoReduzido
                  }
                </Text>
              </View>
  
              <View style={styles.metricCard}>
                <Text
                  style={styles.metricTitle}
                >
                  Passagens totais
                </Text>
  
                <Text
                  style={styles.metricValue}
                >
                  {data.passagens}
                </Text>
              </View>
            </View>
          </View>
  
          {/* ESG */}
          <View style={styles.esgBox}>
            <Text style={styles.esgTitle}>
              🌍 Impacto ESG
            </Text>
  
            <Text
              style={styles.esgDescription}
            >
              Sua empresa está
              contribuindo ativamente
              para redução de emissões
              de carbono. O CO₂ evitado
              equivale a 2.1 árvores
              absorvendo carbono
              durante 1 ano.
            </Text>
  
            <View style={styles.esgGrid}>
              <View style={styles.esgCard}>
                <Text
                  style={styles.esgValue}
                >
                  {data.co2}
                </Text>
  
                <Text
                  style={styles.esgLabel}
                >
                  CO₂ Evitado
                </Text>
              </View>
  
              <View style={styles.esgCard}>
                <Text
                  style={styles.esgValue}
                >
                  {
                    data.combustivel
                  }
                </Text>
  
                <Text
                  style={styles.esgLabel}
                >
                  Combustível
                </Text>
              </View>
  
              <View style={styles.esgCard}>
                <Text
                  style={styles.esgValue}
                >
                  2 h
                </Text>
  
                <Text
                  style={styles.esgLabel}
                >
                  Tempo
                </Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  }